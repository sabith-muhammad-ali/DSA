class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  search(value) {
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      i++;
      curr = curr.next;
    }
  }
  tailPrepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  tailAppend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  insert(value, index) {
    const node = new Node(value);
    if (index === 0) {
      this.prepend(value);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }
  removeValue(value){
    if (this.head.value === value) {
        this.head = this.head.next
        this.size--
    } else {
        let prev = this.head
        while(prev.next && prev.next.value !== value){
            prev = prev.next
        }
        if(prev.next){
            prev.next = prev.next.next
            this.size--
        }        
    }
  }
  findMiddle(){
    let one = this.head
    let two = this.head
    while(two && two.next){
        one = one.next
        two = two.next.next
    }
    console.log(`middel man ${one.value}`);
  }
  deleteMiddle(){
    let prev = null
    let one = this.head
    let two = this.head
    while (two && two.next) {
        prev = one
        one = one.next
        two = two.next.next
    }
    if(prev){
        prev.next = prev.next.next
        this.size--
    }
  }
  print() {
    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} `;
      curr = curr.next;
    }
    console.log(listValues);
  }
}
const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.prepend(50);
list.prepend(60);
list.prepend(70);
list.prepend(80);
list.prepend(90);
list.prepend(100);
list.print();
list.print();