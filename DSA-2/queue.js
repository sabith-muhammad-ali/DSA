// class Queue{
//     constructor(){
//         this.items = []
//     }
//     enqueue(value){
//         this.items.push(value)
//     }
//     dequeue(){
//         return this.items.shift()
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     peek(){
//         if (!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null
//     }
//     size(){
//         return this.items.length
//     }
//     search(value) {
//         return this.items.includes(value);
//     }
//     print(){
//         console.log(this.items.toString())
//     }
// }
// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// console.log(queue.peek());
// queue.dequeue()
// queue.print()
// console.log(queue.search(20)) // true
// console.log(queue.search(40)) // false
//==========================================================================================================================================================================
// queueUsingObject
// class Queue{
//     constructor(){
//         this.items = {}
//         this.front = 0
//         this.back = 0
//     }
//     enqueue(value){
//         this.items[this.back] = value
//         this.back++
//     }
//     dequeue(){
//         delete this.items[this.front]
//         this.front++
//     }
//     isEmpty(){
//         return this.back - this.front === 0
//     }
//     peek(){
//         return this.items[this.front]
//     }
//     print(){
//         console.log(this.items);
//     }
// }
// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// queue.print()
// queue.dequeue()
// queue.print()
//==========================================================================================================================================================================
// queueLinkedlist
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class QueueList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   enqueue(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//   }

//     dequeue(){
//         let value = this.head.value; 
//         this.head = this.head.next;
//         if (this.head === null) {
//             this.tail = null; 
//         }
//         this.size--;
//         return value;
//     }

//   peek() {
//     return this.head.value;
//   }

//   getSize() {
//     return this.size;
//   }

//   print() {
//     let curr = this.head;
//     let listValues = "";
//     while (curr) {
//       listValues += `${curr.value} `;
//       curr = curr.next;
//     }
//     console.log(listValues);
//   }
// }

// const listQueue = new QueueList()
// listQueue.enqueue(10)
// listQueue.enqueue(20)
// listQueue.enqueue(30)
// listQueue.print()
// listQueue.dequeue()
// listQueue.print()
// console.log(listQueue.peek())
//==========================================================================================================================================================================
// string reverse using Queue
// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return "Underflow";
//     }
//     return this.items.shift();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }
// }

// function reverseStringUsingQueue(str) {
//   let queue = new Queue();
//   let reversedStr = '';

//   for (let i = 0; i < str.length; i++) {
//     queue.enqueue(str[i]);
//   }

//   while (!queue.isEmpty()) {
//     reversedStr = queue.dequeue() + reversedStr;
//   }

//   return reversedStr;
// }

// let originalString = "hello";
// console.log(originalString);
// console.log(reverseStringUsingQueue(originalString));
//==========================================================================================================================================================================
// reverse Array using Queue
// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return "Underflow";
//     }
//     return this.items.shift();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }
// }

// function reverseArrayUsingQueue(arr) {
//   let queue = new Queue();
//   let reversedArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     queue.enqueue(arr[i]);
//   }

//   while (!queue.isEmpty()) {
//     reversedArray.unshift(queue.dequeue());
//   }

//   return reversedArray;
// }

// let originalArray = [1, 2, 3, 4, 5];
// console.log(originalArray);
// console.log(reverseArrayUsingQueue(originalArray));
//==========================================================================================================================================================================
// reverse Queue
// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       return "Underflow";
//     }
//     return this.items.shift();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }
// }

// function reverseQueue(queue) {
//   let stack = [];

//   while (!queue.isEmpty()) {
//     stack.push(queue.dequeue());
//   }

//   while (stack.length !== 0) {
//     queue.enqueue(stack.pop());
//   }

//   return queue;
// }

// // Example usage
// let originalQueue = new Queue();
// originalQueue.enqueue(1);
// originalQueue.enqueue(2);
// originalQueue.enqueue(3);
// originalQueue.enqueue(4);
// originalQueue.enqueue(5);

// console.log(originalQueue.items);
// reverseQueue(originalQueue);
// console.log(originalQueue.items);
//==========================================================================================================================================================================
// search value form queue in linkedlist
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class QueueLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     enqueue(value) {
//         let node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.size++;
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty");
//             return;
//         }
//         let value = this.head.value;
//         this.head = this.head.next;
//         if (this.head === null) {
//             this.tail = null;
//         }
//         this.size--;
//         return value;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     print() {
//         let curr = this.head;
//         let listValues = '';
//         while (curr) {
//             listValues += `${curr.value} `;
//             curr = curr.next;
//         }
//         console.log(listValues.trim());
//     }

//     search(value) {
//         let curr = this.head;
//         while (curr) {
//             if (curr.value === value) {
//                 return true;
//             }
//             curr = curr.next;
//         }
//         return false;
//     }
// }

// let queueLinkedList = new QueueLinkedList();
// queueLinkedList.enqueue(1);
// queueLinkedList.enqueue(2);
// queueLinkedList.enqueue(3);
// queueLinkedList.print(); // Output: 1 2 3
// console.log(queueLinkedList.search(2)); // Output: true
// console.log(queueLinkedList.search(4)); // Output: false
//==========================================================================================================================================================================
// create queue using stack
// class Queue {
//   constructor() {
//     this.stack1 = [];
//     this.stack2 = [];
//   }

//   enqueue(item) {
//     this.stack1.push(item);
//   }

//   dequeue() {
//     if (this.stack2.length === 0) {
//       while (this.stack1.length > 0) {
//         this.stack2.push(this.stack1.pop());
//       }
//     }

//     return this.stack2.pop();
//   }

//   isEmpty() {
//     return this.stack1.length === 0 && this.stack2.length === 0;
//   }

//   print() {
//     console.log(this.stack2.concat(this.stack1.reverse()));
//   }
// }

// // Example usage:
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.print();
// queue.dequeue();
// queue.print();
//==========================================================================================================================================================================
