class HashTable{
    constructor(){
        this.table = {}
    }
    hashkey(key){
        let realKey = key.toString()
        let hashedKey = 0
        
        for(let i = 0; i < realKey.length; i++){
            hashedKey += realKey.charCodeAt(i)
        }
        return hashedKey
    }
    
    set(key,value){
        const index = this.hashkey(key)
        if(!this.table[index]){
            this.table[index] = []
        }
        this.table[index].push({key, value})
    }
    
    get(key){
        const index = this.hashkey(key)
        let bucket = this.table[index]
        if(bucket){
            for(let item of bucket){
                if(item.key === key){
                    return item.value
                }
            }
        }
        return undefined
    }
    remove(key){
        const index = this.hashkey(key)
        let bucket = this.table[index]
        if(bucket){
            let bucketIndex = bucket.findIndex((item) => item.key === key)
            if(bucketIndex != -1){
                bucket.splice(bucketIndex,1)
            }
        }
    }
}
let hashTable = new HashTable()
hashTable.set('firstName', 'sabith')
hashTable.set('lastName', 'muhammad ali')
console.log(hashTable.get('firstName'))  // Output: sabith
console.log(hashTable.get('lastName'))   // Output: muhammad ali
hashTable.remove('lastName')
console.log(hashTable.get('lastName')) 