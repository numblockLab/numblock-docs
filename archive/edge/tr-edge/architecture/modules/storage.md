---
id: storage
title: Depolama
description: Polygon Edge'in depolama modülüne ilişkin açıklama.
keywords:
  - docs
  - polygon
  - edge
  - architecture
  - module
  - storage
  - LevelDB
---

## Genel Bakış {#overview}

Polygon Edge şu anda veri depolama ve **bellek içi** veri depolama için **LevelDB** kullanır.

Polygon Edge genelinde, modüller altta yatan veri depolaması ile etkileşim kurmak istediğinde,
bunun için hangi DB motoru veya hizmet ile konuştuklarını bilmelerine gerek yoktur.

DB katmanı, modüllerin sorguladığı arabirimleri dışa aktaran **Depolama** adlı bir modül arasında sadeleştirilir.

Şimdilik sadece **LevelDB** olacak şekilde her DB katmanı, bu yöntemleri ayrı ayrı uygulayarak, uygulamalarına uygun olmalarını sağlar.

````go title="blockchain/storage/storage.go"
// Storage is a generic blockchain storage
type Storage interface {
	ReadCanonicalHash(n uint64) (types.Hash, bool)
	WriteCanonicalHash(n uint64, hash types.Hash) error

	ReadHeadHash() (types.Hash, bool)
	ReadHeadNumber() (uint64, bool)
	WriteHeadHash(h types.Hash) error
	WriteHeadNumber(uint64) error

	WriteForks(forks []types.Hash) error
	ReadForks() ([]types.Hash, error)

	WriteDiff(hash types.Hash, diff *big.Int) error
	ReadDiff(hash types.Hash) (*big.Int, bool)

	WriteHeader(h *types.Header) error
	ReadHeader(hash types.Hash) (*types.Header, error)

	WriteCanonicalHeader(h *types.Header, diff *big.Int) error

	WriteBody(hash types.Hash, body *types.Body) error
	ReadBody(hash types.Hash) (*types.Body, error)

	WriteSnapshot(hash types.Hash, blob []byte) error
	ReadSnapshot(hash types.Hash) ([]byte, bool)

	WriteReceipts(hash types.Hash, receipts []*types.Receipt) error
	ReadReceipts(hash types.Hash) ([]*types.Receipt, error)

	WriteTxLookup(hash types.Hash, blockHash types.Hash) error
	ReadTxLookup(hash types.Hash) (types.Hash, bool)

	Close() error
}
````

## LevelDB {#leveldb}

### Ön Ekler {#prefixes}

LevelDB depolama sorgulamasını deterministik hle getirmek ve anahtar depolama çakışmasını önlemek için Polygon Edge
veri depolarken ön ekler ve alt ön ekler kullanır

````go title="blockchain/storage/keyvalue.go"
// Prefixes for the key-value store
var (
	// DIFFICULTY is the difficulty prefix
	DIFFICULTY = []byte("d")

	// HEADER is the header prefix
	HEADER = []byte("h")

	// HEAD is the chain head prefix
	HEAD = []byte("o")

	// FORK is the entry to store forks
	FORK = []byte("f")

	// CANONICAL is the prefix for the canonical chain numbers
	CANONICAL = []byte("c")

	// BODY is the prefix for bodies
	BODY = []byte("b")

	// RECEIPTS is the prefix for receipts
	RECEIPTS = []byte("r")

	// SNAPSHOTS is the prefix for snapshots
	SNAPSHOTS = []byte("s")

	// TX_LOOKUP_PREFIX is the prefix for transaction lookups
	TX_LOOKUP_PREFIX = []byte("l")
)

// Sub-prefixes
var (
	HASH   = []byte("hash")
	NUMBER = []byte("number")
	EMPTY  = []byte("empty")
)
````

## Gelecek Planları {#future-plans}

Yakın gelecek planları arasında aşağıdakiler gibi en popüler DB çözümlerinden bazılarını eklemek bulunur:
* PostgreSQL
* MySQL


## 📜 Kaynaklar {#resources}
* **[LevelDB](https://github.com/google/leveldb)**