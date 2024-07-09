// // stack using list
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class stackList{
//     constructor(){
//         this.top = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0;
//     }
//     push(value){
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.top = node
//         } else {
//             node.next = this.top
//             this.top = node
//         }
//         this.size++
//     }
//     pop(){
//         this.top = this.top.next
//     }
//     peek(){
//         return this.top.value
//     }
//     search(value){
//          let curr = this.top
//          while(curr){
//              if(curr.value === value){
//                  return value
//              }
//              curr = curr.next
//          }
//          return false
//      }
//     print(){
//         let curr = this.top
//         let listValues = ''
//         while (curr) {
//             listValues += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(listValues);
//     }
// }
// const stack = new stackList()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()
// stack.pop()
// stack.print()
//==========================================================================================================================================================================
//stack using array
// class Stack{
//     constructor() {
//         this.items = []
//     }
//     push(value){
//         this.items.push(value)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     search(element) {
//          return this.items.includes(element);
//     }
//     print(){
//         console.log(this.items);
//     }
// }
// const stack = new Stack()
// stack.push(23)
// stack.push(13)
// stack.push(43)
// stack.print()
// stack.pop()
// stack.print()
// console.log(stack.peek());
//==========================================================================================================================================================================
// reverse Array using stack
// class Stack {
//     constructor() {
//       this.items = [];
//     }
//     push(element) {
//       this.items.push(element);
//     }
//     pop() {
//       if (this.isEmpty()) {
//         return "Underflow";
//       }
//       return this.items.pop();
//     }
//     isEmpty() {
//       return this.items.length === 0;
//     }
//   }

//   function reverseArrayUsingStack(arr) {
//     let stack = new Stack();
//     for (let i = 0; i < arr.length; i++) {
//       stack.push(arr[i]);
//     }
//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = stack.pop();
//     }
//     return arr;
//   }
//   // Example usage
//   let originalArray = [1, 2, 3, 4, 5];
//   console.log("Original Array:", originalArray);

//   let reversedArray = reverseArrayUsingStack(originalArray);
//   console.log("Reversed Array:", reversedArray);
//==========================================================================================================================================================================
// reverse String using stack
// class Stack {
//     constructor() {
//       this.items = [];
//     }
//     push(element) {
//       this.items.push(element);
//     }

//     pop() {
//       if (this.isEmpty()) {
//         return "Underflow";
//       }
//       return this.items.pop();
//     }

//     isEmpty() {
//       return this.items.length === 0;
//     }
//   }

//   function reverseStringUsingStack(str) {
//     let stack = new Stack();
//     let reversedStr = '';

//     for (let i = 0; i < str.length; i++) {
//       stack.push(str[i]);
//     }

//     while (!stack.isEmpty()) {
//       reversedStr += stack.pop();
//     }

//     return reversedStr;
//   }

//   // Example usage
//   let originalString = "hello";
//   console.log("Original String:", originalString);

//   let reversedString = reverseStringUsingStack(originalString);
//   console.log("Reversed String:", reversedString);
// ==========================================================================================================================================================================
// reverse Stack
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(value) {
//         this.items.push(value);
//     }

//     pop() {
//         return this.items.pop();
//     }

//     peek() {
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     print() {
//         console.log(this.items);
//     }
// }

// function reverseStack(stack) {
//     let newStack = new Stack();
//     while (!stack.isEmpty()) {
//         newStack.push(stack.pop());
//     }
//     stack.items = newStack.items;
// }

// let myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// myStack.print();
// reverseStack(myStack);
// myStack.print();
//==========================================================================================================================================================================
//create stack using queue
// class Stack {
//   constructor() {
//     this.queue1 = [];
//     this.queue2 = [];
//   }

//   push(item) {
    
//     this.queue1.push(item);
//   }

//   pop() {
//     while (this.queue1.length > 1) {
//       this.queue2.push(this.queue1.shift());
//     }

//     const poppedItem = this.queue1.shift();
//     [this.queue1, this.queue2] = [this.queue2, this.queue1];

//     return poppedItem;
//   }

//   isEmpty() {
//     return this.queue1.length === 0;
//   }

//   peek() {
//     return this.queue1[this.queue1.length - 1];
//   }

//   print() {
//     console.log(this.queue1.concat(this.queue2.reverse()));
//   }
// }

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.print();
// stack.pop();
// stack.print();