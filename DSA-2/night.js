class HashTable {
    constructor() {
        this.table = new Array(10);  
    }

    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    insert(key, value) {
        const index = this.hashFunction(key);
        this.table[index] = value;
    }

    display() {
        this.table.forEach((value, index) => {
            console.log(`Index ${index}: ${value}`);
        });
    }
}
const ht = new HashTable();
ht.insert("apple", 1);
ht.insert("banana", 2);
ht.insert("cherry", 3);
ht.display();


class HashTable {
    constructor() {
        this.table = new Array(10);
    }

    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    insert(key, value) {
        const index = this.hashFunction(key);
        this.table[index] = value;
    }

    search(key) {
        const index = this.hashFunction(key);
        return this.table[index];
    }

    display() {
        this.table.forEach((value, index) => {
            console.log(`Index ${index}: ${value}`);
        });
    }
}

// Create a hash table
const ht = new HashTable();

// Insert key-value pairs
ht.insert("apple", 1);
ht.insert("banana", 2);
ht.insert("cherry", 3);

// Search for a value using a key
console.log("Value for 'banana':", ht.search("banana"));



class HashTable {
    constructor() {
        this.table = new Array(3).fill(null).map(() => []);  // Small size to force collisions
    }

    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    insert(key, value) {
        const index = this.hashFunction(key);
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        this.table[index].push([key, value]);
    }

    search(key) {
        const index = this.hashFunction(key);
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return null;
    }

    display() {
        this.table.forEach((bucket, index) => {
            console.log(`Index ${index}: ${JSON.stringify(bucket)}`);
        });
    }
}

// Create a hash table
const ht = new HashTable();

// Insert key-value pairs that hash to the same index
ht.insert("apple", 1);
ht.insert("banana", 2);
ht.insert("cherry", 3);
ht.insert("grape", 4);  // Potential collision
ht.insert("melon", 5);  // Potential collision

// Display the hash table
ht.display();
