---
id: json-rpc
title: JSON RPC
description: Penjelasan modul JSON RPC dari Polygon Edge.
keywords:
  - docs
  - polygon
  - edge
  - architecture
  - module
  - json-rpc
  - endpoints
---

## Ikhtisar {#overview}

Modul **JSON RPC** mengimplementasikan **lapisan API JSON RPC**, sesuatu yang digunakan pengembang dApp untuk berinteraksi dengan
blockchain.

Ini termasuk dukungan standar **[titik akhir json-rpc](https://eth.wiki/json-rpc/API)**, serta titik akhir
websocket.

## Antarmuka Blockchain {#blockchain-interface}

Polygon Edge menggunakan ***antarmuka blockchain*** untuk menentukan semua metode yang perlu digunakan oleh modul JSON RPC
untuk mengirimkan titik akhirnya.

Antarmuka blockchain is diimplementasikan oleh server **[Minimal](/docs/edge/architecture/modules/minimal)**. Ini adalah implementasi dasar
yang diteruskan ke lapisan JSON.

````go title="jsonrpc/blockchain.go"
type blockchainInterface interface {
	// Header returns the current header of the chain (genesis if empty)
	Header() *types.Header

	// GetReceiptsByHash returns the receipts for a hash
	GetReceiptsByHash(hash types.Hash) ([]*types.Receipt, error)

	// Subscribe subscribes for chain head events
	SubscribeEvents() blockchain.Subscription

	// GetHeaderByNumber returns the header by number
	GetHeaderByNumber(block uint64) (*types.Header, bool)

	// GetAvgGasPrice returns the average gas price
	GetAvgGasPrice() *big.Int

	// AddTx adds a new transaction to the tx pool
	AddTx(tx *types.Transaction) error

	// State returns a reference to the state
	State() state.State

	// BeginTxn starts a transition object
	BeginTxn(parentRoot types.Hash, header *types.Header) (*state.Transition, error)

	// GetBlockByHash gets a block using the provided hash
	GetBlockByHash(hash types.Hash, full bool) (*types.Block, bool)

	// ApplyTxn applies a transaction object to the blockchain
	ApplyTxn(header *types.Header, txn *types.Transaction) ([]byte, bool, error)

	stateHelperInterface
}
````

## Titik akhir ETH {#eth-endpoints}

Semua titik akhir JSON standar diimplementasikan dalam:

````bash
jsonrpc/eth_endpoint.go
````

## Filter Manager {#filter-manager}

**Filter Manager** adalah layanan yang beroperasi bersama server JSON RPC.

Ini memberikan dukungan untuk memfilter blok di blockchain.<br />
Terutama, termasuk **log** dan filter tingkat **blok**.

Filter Manager sangat bergantung pada Peristiwa Langganan yang disebutkan di
bagian [Blockchain](blockchain#blockchain-subscriptions)

````go title="jsonrpc/filter_manager.go"
type Filter struct {
	id string

	// block filter
	block *headElem

	// log cache
	logs []*Log

	// log filter
	logFilter *LogFilter

	// index of the filter in the timer array
	index int

	// next time to timeout
	timestamp time.Time

	// websocket connection
	ws wsConn
}


type FilterManager struct {
	logger hclog.Logger

	store   blockchainInterface
	closeCh chan struct{}

	subscription blockchain.Subscription

	filters map[string]*Filter
	lock    sync.Mutex

	updateCh chan struct{}
	timer    timeHeapImpl
	timeout  time.Duration

	blockStream *blockStream
}

````

Peristiwa Filter Manager dikirim dalam metode *Run*:

````go title="jsonrpc/filter_manager.go"
func (f *FilterManager) Run() {

	// watch for new events in the blockchain
	watchCh := make(chan *blockchain.Event)
	go func() {
		for {
			evnt := f.subscription.GetEvent()
			if evnt == nil {
				return
			}
			watchCh <- evnt
		}
	}()

	var timeoutCh <-chan time.Time
	for {
		// check for the next filter to be removed
		filter := f.nextTimeoutFilter()
		if filter == nil {
			timeoutCh = nil
		} else {
			timeoutCh = time.After(filter.timestamp.Sub(time.Now()))
		}

		select {
		case evnt := <-watchCh:
			// new blockchain event
			if err := f.dispatchEvent(evnt); err != nil {
				f.logger.Error("failed to dispatch event", "err", err)
			}

		case <-timeoutCh:
			// timeout for filter
			if !f.Uninstall(filter.id) {
				f.logger.Error("failed to uninstall filter", "id", filter.id)
			}

		case <-f.updateCh:
			// there is a new filter, reset the loop to start the timeout timer

		case <-f.closeCh:
			// stop the filter manager
			return
		}
	}
}
````

## 📜 Sumber daya {#resources}
* **[Ethereum JSON-RPC](https://eth.wiki/json-rpc/API)**
