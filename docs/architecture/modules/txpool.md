---
id: txpool 
title: Transaction Handling
---

## Overview

The Transaction Handling module represents the transaction pool implementation, where transactions are added from different parts of
the system. The module also exposes several useful features for node operators, which are covered below.

## Operator Commands

````go title="txpool/proto/operator.proto
service TxnPoolOperator {
    // Status returns the current status of the pool
    rpc Status(google.protobuf.Empty) returns (TxnPoolStatusResp);

    // AddTxn adds a local transaction to the pool
    rpc AddTxn(AddTxnReq) returns (google.protobuf.Empty);

    // Subscribe subscribes for new events in the txpool
    rpc Subscribe(google.protobuf.Empty) returns (stream TxPoolEvent);
}

````

Node operators can query these GRPC endpoints, as described in the **[CLI Commands](/docs/validators/cli-commands)** section.

## Processing Transactions

````go title="txpool/txpool.go"
// AddTx adds a new transaction to the pool
func (t *TxPool) AddTx(tx *types.Transaction) error {
	if err := t.addImpl("addTxn", tx); err != nil {
		return err
	}

	// broadcast the transaction only if network is enabled
	// and we are not in dev mode
	if t.topic != nil && !t.dev {
		txn := &proto.Txn{
			Raw: &any.Any{
				Value: tx.MarshalRLP(),
			},
		}
		if err := t.topic.Publish(txn); err != nil {
			t.logger.Error("failed to topic txn", "err", err)
		}
	}

	if t.NotifyCh != nil {
		select {
		case t.NotifyCh <- struct{}{}:
		default:
		}
	}
	return nil
}

func (t *TxPool) addImpl(ctx string, txns ...*types.Transaction) error {
	if len(txns) == 0 {
		return nil
	}

	from := txns[0].From
	for _, txn := range txns {
		// Since this is a single point of inclusion for new transactions both
		// to the promoted queue and pending queue we use this point to calculate the hash
		txn.ComputeHash()

		err := t.validateTx(txn)
		if err != nil {
			return err
		}

		if txn.From == types.ZeroAddress {
			txn.From, err = t.signer.Sender(txn)
			if err != nil {
				return fmt.Errorf("invalid sender")
			}
			from = txn.From
		} else {
			// only if we are in dev mode we can accept
			// a transaction without validation
			if !t.dev {
				return fmt.Errorf("cannot accept non-encrypted txn")
			}
		}

		t.logger.Debug("add txn", "ctx", ctx, "hash", txn.Hash, "from", from)
	}

	txnsQueue, ok := t.queue[from]
	if !ok {
		stateRoot := t.store.Header().StateRoot

		// initialize the txn queue for the account
		txnsQueue = newTxQueue()
		txnsQueue.nextNonce = t.store.GetNonce(stateRoot, from)
		t.queue[from] = txnsQueue
	}
	for _, txn := range txns {
		txnsQueue.Add(txn)
	}

	for _, promoted := range txnsQueue.Promote() {
		t.sorted.Push(promoted)
	}
	return nil
}
````
The ***addImpl*** method is the bread and butter of the **Transaction Handling** module. 
It is the central place where transactions are added in the system, being called from the GRPC service, JSON RPC endpoints,
and whenever the client receives a transaction through the **gossip** protocol.

It takes in as an argument **ctx**, which just denotes the context from which the transactions are being added (GRPC, JSON RPC...). <br />
The other parameter is the list of transactions to be added to the pool.

The key thing to note here is the check for the **From** field within the transaction:
* If the **From** field is **empty**, it is regarded as an unencrypted/unsigned transaction. These kinds of transactions are only
accepted in development mode
* If the **From** field is **not empty**, that means that it's a signed transaction, so signature verification takes place

After all these validations, the transactions are considered to be valid.

## Data structures

````go title="txpool/txpool.go"
// TxPool is a pool of transactions
type TxPool struct {
	logger hclog.Logger
	signer signer

	store      store
	idlePeriod time.Duration

	queue map[types.Address]*txQueue
	sorted *txPriceHeap

	// network stack
	network *network.Server
	topic   *network.Topic

	sealing  bool
	dev      bool
	NotifyCh chan struct{}

	proto.UnimplementedTxnPoolOperatorServer
}
````

The fields in the TxPool object that can cause confusion are the **queue** and **sorted** lists.
* **queue** - Heap implementation of a sorted list of account transactions (by nonce)
* **sorted** - Sorted list for all the current promoted transactions (all executable transactions). Sorted by gas price

## Gas limit error management

Whenever you submit a transaction, there are three ways it can be processed by the Transaction Handling.

1. All pending transactions can fit in a block
2. One or more pending transactions can not fit in a block
3. One or more pending transactions will never fit in a block

Here, the word **_fit_** means that the transaction has a gas limit that is lower than the remaining gas in the Transaction Handling.

## Block Gas Target

There are situations when nodes want to keep the block gas limit below or at a certain target on a running chain.

The node operator can set the target gas limit on a specific node, which will try to apply this limit to newly created blocks. 
If the majority of the other nodes also have a similar (or same) target gas limit set, then the block gas limit will always hover
around that block gas target, slowly progressing towards it (at max `1/1024 * parent block gas limit`) as new blocks are created.

### Example scenario

* The node operator sets the block gas limit for a single node to be `5000`
* Other nodes are configured to be `5000` as well, apart from a single node which is configured to be `7000`
* When the nodes who have their gas target set to `5000` become proposers, they will check to see if the gas limit is already at the target
* If the gas limit is not at the target (it is greater / lower), the proposer node will set the block gas target to at most (1/1024 * parent gas limit) in the direction of the target
   1. Ex: `parentGasLimit = 4500` and `blockGasTarget = 5000`, the proposer will calculate the gas limit for the new block as `4504.39453125` (`4500/1024 + 4500`)
   2. Ex: `parentGasLimit = 5500` and `blockGasTarget = 5000`, the proposer will calculate the gas limit for the new block as `5494.62890625` (`5500 - 5500/1024`)
* This ensures that the block gas limit in the chain will be kept at the target, because the single proposer who has the target configured to `7000` cannot advance the limit much, and the majority
of the nodes who have it set at `5000` will always attempt to keep it there