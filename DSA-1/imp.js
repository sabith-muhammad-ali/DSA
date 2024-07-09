class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    search(value){
        let i = 0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            i++
            curr = curr.next
        }
    }
    reverese(){
        let curr = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    middel(){
        if(this.isEmpty()){
            console.log("no values")
        }else{
            let one = this.head
            let two = this.head
            while(two && two.next !== null){
                one = one.next
                two = two.next.next
            }
            console.log(`middel man is ${one.value}`)
        }
    }
    deleteMiddel(){
        if(this.isEmpty()){
            console.log("no values")
        }else{
            let one = this.head
            let two = this.head
            let prev = null
            while(two && two.next !== null){
                prev = one
                one = one.next
                two = two.next.next
            }
            console.log(`middel man ${one.value}`)
                if(prev){
                    prev.next = one.next
                }
        }
    }
    removeDup(){
        let curr = this.head;
        while(curr){
            let runner = curr; 
            while(runner.next ){
                if(runner.next.value === curr.value){
                    runner.next = runner.next.next;
                } else {
                    runner = runner.next;
                }
            }
            curr = curr.next;
        }
    }
    print(){
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues)
    }
}
const list = new LinkedList()

