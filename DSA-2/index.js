//                                                                                  bubbleSort()
// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
// }
// let array = [54,13,76,96,56]
// bubbleSort(array);
// console.log(array);
//====================================================================================================================================================================================
//                                                                                  insertionSort()
// function insertionSort(arr) {
//     for(let i = 0; i < arr.length; i++){
//         let nti = arr[i]
//         let j = i - 1;
//         while (j >= 0 && arr[j] > nti) {
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = nti
//     }
// }
// let arr = [5,2,4,3,1]
// insertionSort(arr)
// console.log(arr);
//====================================================================================================================================================================================
//                                                                                  quickSort()
// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }
// let arr = [4, 6, 2, 5, 3, 1];
// console.log(quickSort(arr));
//====================================================================================================================================================================================
//                                                                              selectionSort()
// function selectionSort(arr) {
//     for(let i = 0; i < arr.length-1; i++){
//         let min = i
//         for(let j = i+1; j < arr.length; j++){
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         if (min !==i) {
//             let temp = arr[min]
//             arr[min] = arr[i]
//             arr[i] = temp
//         }
//     }
//     return arr
// }
// let arr = [6,2,1,4,3,5]
// console.log(selectionSort(arr));
//====================================================================================================================================================================================
                                                                                // create a stack 
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
//         return this.size === 0
//     }
//     push(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.top = node
//         }else{
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
// stack.pop()
// stack.print()
// console.log(stack.peek())
//====================================================================================================================================================================================
                                                                                // crate stack using array 
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
//     print(){
//         console.log(this.items);
//     }
// }
// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.pop()
// stack.print()
// console.log(stack.peek());
//====================================================================================================================================================================================
//                                                                           reverse a Array using stack 
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
//     isEmpty(){
//         return this.items.length === 0
//     }
// }
// function reverseArrayUsingStack(arr) {
//     let stack = new Stack()
//     for(let i = 0; i < arr.length;i++){
//         stack.push(arr[i])
//     }
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = stack.pop()
//     }
//     return arr
// }
// let arr = [1,2,3]
// console.log(reverseArrayUsingStack(arr));
//====================================================================================================================================================================================
//                                                                          reverse string useing Array 
// class StackArr{
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
//     isEmpty(){
//         return this.items.length === 0
//     }
//     print(){
//         console.log(this.items);
//     }
// }

// function reverseStringUsingStak(str) {
//     let stack = new StackArr()
//     let reversedStr = ''
//     for(let i = 0; i < str.length; i++){
//         stack.push(str[i])
//     }

//     while (!stack.isEmpty()) {
//         reversedStr += stack.pop()
//     }
//     return reversedStr
// }
// let str = 'hello'
// let output = reverseStringUsingStak(str)
// console.log(output);
//====================================================================================================================================================================================
//                                                                                  reverse Stack 
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
//     let tempStack = new Stack(); 
//     while (!stack.isEmpty()) {
//         tempStack.push(stack.pop());
//     }
//     stack.items = tempStack.items;
// }

// let myStack = new Stack();
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// myStack.print();
// reverseStack(myStack);
// myStack.print();
//====================================================================================================================================================================================
//                                                                      creating a queue using two stacks.
// class Queue{
//     constructor() {
//         this.stack1 = []
//         this.stack2 = []
//     }
//     enqueue(value){
//         this.stack1.push(value)
//     }
//     dequeue(){
//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.pop()
//     }
//     isEmpty(){
//         return this.stack1.length === 0 && this.stack2.length === 0
//     }
//     peek(){
//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2[this.stack1.length-1]
//     }
//     print(){
//         let result = this.stack2.slice().reverse().concat(this.stack1);
//         console.log(result);
//     }
// }
// let queue = new Queue();
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.dequeue()
// queue.print()
//====================================================================================================================================================================================
// function findFrequency(arr) {
//     var frequency = new Map();
  
//     arr.forEach(function(element) {
//       if (frequency.has(element)) {
//         frequency.set(element, frequency.get(element) + 1);
//       } else {
//         frequency.set(element, 1);
//       }
//     });
  
//     frequency.forEach(function(value, key) {
//       console.log(key + " : " + value);
//     });
//   }
  
//   // Example usage
//   var arr = [1, 2, 3, 4, 1, 2, 3, 1, 2, 1];
//   findFrequency(arr);
//====================================================================================================================================================================================
// function calculateFrequency(str) {
//     const frequencyMap = new Map();
//     for (let char of str) {
//         if (frequencyMap.has(char)) {
//             frequencyMap.set(char, frequencyMap.get(char) + 1);
//         } else {
//             frequencyMap.set(char, 1);
//         }
//     }
//     return frequencyMap;
// }

// const str = "muhammad";
// const frequencyMap = calculateFrequency(str);

// frequencyMap.forEach((value, key) => {
//     console.log(`${key}  ${value} `);
// });
//====================================================================================================================================================================================