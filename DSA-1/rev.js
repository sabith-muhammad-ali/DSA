// class Node{
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }
// class LinkedList{
//   constructor() {
//     this.head = null
//     this.size = 0
//   }
//   isEmpty(){
//     return this.size === 0
//   }
//   prepend(value){
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
//       print() {
//     if (this.isEmpty()) {
//       console.log("empty brother");
//     } else {
//       let curr = this.head;
//       let listValues = "";
//       while (curr) {
//         listValues += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(listValues);
//     }
//   }
// }
// const list = new LinkedList()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.print()
// ==========================================================================================================================================================================
// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }
// class LinkedList{
//   constructor(){
//     this.head = null
//     this.size = 0
//   }
//   isEmpty(){
//     return this.size === 0
//   }
//   append(value){
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       let prev = this.head
//       while (prev.next) {
//         prev = prev.next
//       }
//       prev.next = node
//     }
//     this.size++
//   }
//   print(){
//     if (this.isEmpty()) {
//       console.log('no value');
//     } else {
//       let curr = this.head
//       let listValues = ''
//       while (curr) {
//         listValues += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValues);
//     }
//   }
// }
// const list = new LinkedList()
// list.append(10)
// list.append(20)
// list.append(30)
// list.print()
// ==========================================================================================================================================================================
// linkedListSearch
// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }
// class LinkedList{
//   constructor() {
//     this.head = null
//     this.size = 0
//   }
//   isEmpty(){
//     return this.size === 0
//   }
//   prepend(value){
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
//   search(value){
//     if (this.isEmpty()) {
//       console.log('no value');
//     } else {
//       let i = 0
//       let curr = this.head
//       while (curr) {
//         if (curr.value === value) {
//           return i
//         }
//         curr = curr.next
//         i++
//       }
//       return -1
//     }
//   }
//   print(){
//     if (this.isEmpty()) {
//       console.log('no value');
//     } else {
//       let curr = this.head
//       let listValues = ''
//       while (curr) {
//         listValues += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValues);
//     }
//   }
// }
// const list = new LinkedList()
// list.prepend(10)
// list.prepend(23)
// list.prepend(43)
// list.print()
// console.log(list.search(43));
// =========================================================================================================================================================================
// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }
// class LinkedList{
//   constructor() {
//     this.head = null
//     this.size = 0
//   }
//   isEmpty(){
//     return this.size === 0
//   }
//   prepend(value){
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
//   reverse(){
//     if (this.isEmpty()) {
//       console.log('null');
//     }
//     let prev = null
//     let curr = this.head
//     while (curr) {
//       let next = curr.next
//       curr.next = prev
//       prev = curr
//       curr = next
//     }
//     this.head = prev
//   }
//   print(){
//     if (this.isEmpty()) {
//       console.log('no values');
//     } else {
//       let curr = this.head
//       let listValues = ''
//       while (curr) {
//         listValues += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValues);
//     }
//   }
// }
// const list = new LinkedList()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.print()
// list.reverse()
// list.print()
// =========================================================================================================================================================================
// linkeList with tail prepend
// class Node{
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }
// class LinkedList{
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.size = 0
//   }
//   isEmpty(){
//     return this.size === 0
//   }
//   prepend(value){
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//       this.tail = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
//   print(){
//     if (this.isEmpty()) {
//       console.log('no values');
//     } else {
//       let curr = this.head
//       let listValues = ''
//       while (curr) {
//         listValues += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValues);
//     }
//   }
// }
// const list = new LinkedList()
// list.prepend(30)
// list.prepend(20)
// list.prepend(10)
// list.prepend(20)
// list.print()
// ==========================================================================================================================================================================
// linkelist append with tail
// class Node{
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }
// class LinkedList{
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.size = 0
//   }
//   isEmpty(){
//     return this.size === 0
//   }
//   append(value){
//     const node = new Node(value)
//       if (this.isEmpty()) {
//        this.head = node
//        this.tail = node
//       } else {
//         this.tail.next = node
//         this.tail = node
//       }
//       this.size++
//   }
//   print(){
//     if (this.isEmpty()) {
//       console.log('no values');
//     } else {
//       let curr = this.head
//       let listValues = ''
//       while (curr) {
//         listValues += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValues);
//     }
//   }
// }
// const list = new LinkedList()
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.print()
// =============================================================================================================================================================================
// removeFirstValue
// class Node{
//   constructor(value){
//     this.value = value
//     this.next = null
//   }
// }
// class LinkedList{
//   constructor(){
//     this.head = null
//     this.size = 0
//   }
//   isEmpty(){
//     return this.size === 0
//   }
//   prepend(value){
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
//   removeFirst(value){
//     if (this.isEmpty()) {
//       console.log('no value');
//     } else {
//       const value = this.head.value
//       this.head = this.head.next
//       this.size--
//       return value
//     }
//   }
//   print(){
//     if (this.isEmpty()) {
//       console.log('no values');
//     } else {
//       let curr = this.head
//       let listValues = ''
//       while (curr) {
//         listValues += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValues);
//     }
//   }
// }
// const list = new LinkedList()
// list.prepend(10)
// list.prepend(20)
// list.prepend(35)
// list.print()
// console.log(list.removeFirst())
// list.print()
// =========================================================================================================================================================================
// putAffter
// class Node{
//   constructor(value){
//     this.value = value
//     this.next  = null
//   }
// }
// class LinkedList{
//   constructor(){
//     this.head = null
//     this.size = 0
//   }
//   isEmpty(){
//     return this.size === 0
//   }
//   prepend(value){
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
//   putAfter(x,value){
//     const node = new Node(value)
//     let curr = this.head
//     while (curr) {
//       if (curr.value === x) {
//         let store = curr.next
//         curr.next = node
//         node.next = store
//         this.size++
//         break
//       }
//       curr = curr.next
//     }
//   }
//   print(){
//     if (this.isEmpty()) {
//       console.log('no value');
//     } else {
//       let curr = this.head
//       let listValues = ''
//       while (curr) {
//         listValues += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValues);
//     }
//   }
// }
// const list = new LinkedList()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
// list.print()
// list.putAfter(20,25)
// list.print()
// =======================================================================================================================================================================
//removeValue
// class Node{
//   constructor(value){
//     this.value = value
//     this.next  = null
//   }
// }
// class LinkedList{
//   constructor(){
//     this.head = null
//     this.size = 0
//   }
//   isEmpty(){
//     return this.size === 0
//   }
//   prepend(value){
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
//   removeValue(value){
//     if (this.isEmpty()) {
//       console.log('emp');
//     }
//     if (this.head.value === value) {
//       this.head = this.head.next
//       this.size--
//       return value
//     } else {
//       let prev = this.head
//       while(prev.next && prev.next.value !== value){
//         prev = prev.next
//       }
//       if (prev.next) {
//         const removeNode = prev.next
//         prev.next = removeNode.next
//         this.size--
//         return value
//       }
//       return null
//     }
//   }
//   print(){
//     if (this.isEmpty()) {
//       console.log('no value');
//     } else {
//       let curr = this.head
//       let listValues = ''
//       while (curr) {
//         listValues += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValues);
//     }
//   }
// }
// const list = new LinkedList()
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.prepend(40);
// list.print()
// console.log(list.removeValue(20));
// list.print()
// ==========================================================================================================================================================================
// findMiddel
// class Node{
//   constructor(value){
//     this.value = value
//     this.next  = null
//   }
// }
// class LinkedList{
//   constructor(){
//     this.head = null
//     this.size = 0
//   }
//   isEmpty(){
//     return this.size === 0
//   }
//   prepend(value){
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
//   findMiddel(){
//     if (this.isEmpty()) {
//       return null
//     }
//     let one = this.head;
//     let two = this.head
//     while (two && two.next !== null) {
//       one = one.next
//       two = two.next.next
//     }
//     console.log(one.value,"middel man");
//   }
//   print(){
//     if (this.isEmpty()) {
//       console.log('no value');
//     } else {
//       let curr = this.head
//       let listValues = ''
//       while (curr) {
//         listValues += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValues);
//     }
//   }
// }
// const list = new LinkedList()
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.prepend(40);
// list.prepend(50);
// list.print()
// list.findMiddel()
// ==========================================================================================================================================================================
// delete middel man
// class Node{
//   constructor(value){
//     this.value = value
//     this.next  = null
//   }
// }
// class LinkedList{
//   constructor(){
//     this.head = null
//     this.size = 0
//   }
//   isEmpty(){
//     return this.size === 0
//   }
//   prepend(value){
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
//   findMiddel(){
//     if (this.isEmpty()) {
//       console.log('no value');
//     }
//     let prev = null
//     let one = this.head
//     let two = this.head
//     while (two && two.next !== null) {
//       prev = one
//       one = one.next
//       two = two.next.next
//     }
//     console.log(one.value,"middel man");
//     if (prev) {
//       prev.next = one.next
//     }
//     }

//   print(){
//     if (this.isEmpty()) {
//       console.log('no value');
//     } else {
//       let curr = this.head
//       let listValues = ''
//       while (curr) {
//         listValues += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValues);
//     }
//   }
// }
// const list = new LinkedList()
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.prepend(40);
// list.prepend(50);
// list.print()
// list.findMiddel()
// list.print()
// =======================================================================================================================================================================
// class Node{
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }
// class LinkedList{
//   constructor() {
//     this.head = null
//     this.size = 0
//   }
//   isEmpty(){
//     return this.size === 0
//   }
//   append(value){
//     const node = new Node(value)
//     if (this.isEmpty()) {
//       this.head = node
//     }else{
//       let prev = this.head
//       while (prev.next) {
//         prev = prev.next
//       }
//       prev.next = node
//     }
//     this.size++
//   }
//   print(){
//     if (this.isEmpty()) {
//       console.log('no value');
//     } else {
//       let curr = this.head
//       let listValues = ''
//       while (curr) {
//         listValues += `${curr.value} `
//         curr = curr.next
//       }
//       console.log(listValues);
//     }
//   }
// }
// const list = new LinkedList()
// const arr = [1,2,3,4,5];
// arr.forEach((value) => {
//   list.append(value)
// })
// list.print()
// ==============================================================================================================================================================================
// binerySearch
// function binarySearch(arr,target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length-1
//   while (leftIndex <= rightIndex) {
//     let middelIndex = Math.floor((leftIndex + rightIndex) /2)
//     if (target === arr[middelIndex]) {
//       return middelIndex
//     }
//     if (target < arr[middelIndex]) {
//       rightIndex = middelIndex-1
//     } else {
//       leftIndex = middelIndex+1
//     }
//   }
//   return -1
// }
// console.log(binarySearch([1,2,3,4,5],5));
// ==============================================================================================================================================================================
// recursiveBinerySearch
// function recursiveBinerySearch(arr,target) {
//   return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex) {
//   if (leftIndex > rightIndex) {
//     return -1
//   }
//   let middelIndex = Math.floor((leftIndex + rightIndex)/2)
//   if (target === arr[middelIndex]) {
//     return middelIndex
//   }

//   if (target < arr[middelIndex]) {
//     return search(arr,target,leftIndex,middelIndex-1)
//   }else{
//     return search(arr,target,middelIndex+1,rightIndex)
//   }
// }
// console.log(recursiveBinerySearch([1,2,3,4,5],5));
// ==============================================================================================================================================================================
// const str = 'abcabc';
// const charCount = new Map();

// for (let char of str) {
//   charCount.set(char, (charCount.get(char) || 0) + 1);
// }

// charCount.forEach((value, key) => {
//   console.log(`Character '${key}' occurs ${value} times.`);
// });
// ==============================================================================================================================================================================

// function fib(n) {
//   if (n < 2) {
//     return n
//   }
//   return fib(n-1) + fib(n-2)
// }
// console.log(fib(6));
// ==============================================================================================================================================================================
// function reverseString(str) {
//   if(str === ''){
//     return ''
//   }else{
//     return reverseString(str.substr(1)) + str.charAt(0)
//   }
// }
// console.log(reverseString('hello'));
// ==============================================================================================================================================================================
// function factorial(n) {

//   if (n ===0 || n === 1) {
//     return n
//   } else {
//     return n *factorial(n-1)
//   }
// }
// console.log(factorial(5));
///////////////////////////////////////
// function arraySum(arr,index = 0) {
//   if (index === arr.length) {
//     return 0
//   }
//   return arr[index] + arraySum(arr,index+1)
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(arraySum(arr));
// ==============================================================================================================================================================================
// let str = 'hello'
// let value = ''
// for(let i = str.length-1; i >= 0 ; i--){
//    value += str[i]
// }
// console.log(str);
// console.log(value);
// ==============================================================================================================================================================================
//linkedlist
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   insertData(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.next = this.head;
//       this.head.prev = node;
//       this.head = node;
//     }
//     this.size++;
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
// const list = new LinkedList();
// list.insertData(5);
// list.insertData(10);
// list.insertData(15);
// list.insertData(20);
// list.insertData(50);
// list.print();
// ==============================================================================================================================================================================
// function countCharacters(str) {
//     const charCount = [];
//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }
//     return charCount;
// }

// const str = "hello";
// console.log(countCharacters(str));
// ==============================================================================================================================================================================
// function search(arr, t1, t2) {
//     let foundT1 = false;
//     let foundT2 = false;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === t1 ) {
//             foundT1 = true;
//         }
//         if (arr[i] === t2) {
//             foundT2 = true;
//         }
//     }

//     return foundT1 && foundT2;
// }

// console.log(search([1, 2, 3, 4, 5], 3, 2));
// ==============================================================================================================================================================================
// primeNumber
// function prime(n) {                    // O(1)
//     if (n < 2) return false;             // O(1)
//     for (let i = 2; i < n; i++) {        // O(n)
//       if (n % i === 0) {                 // O(1)
//         return false;                    // O(1)
//       }
//     }
//     return true;                         // O(1)
//   }
  
//   console.log(prime(0));
//   console.log(prime(1));
//   console.log(prime(5));
// ==============================================================================================================================================================================
//   function fact(n) {                     // O(1)
// 	var fa = 1;                          // O(1)
// 	for(let i = n; i > 1; i--) {         // O(n)
// 		fa *= i;                           // O(1)
// 	}
// 	return fa;                           // O(1)
// }

// console.log(fact(0));
// console.log(fact(1));
// console.log(fact(5));
// ==============================================================================================================================================================================
// power of tow 
// function power(n) {                 //O(1)
//     if (n < 1) return true;           //O(1)
//     var sum = 2;                      //O(1)
//     for (let i = 2; i < n; i++) {     //O(n)
//       sum *= 2;                       //O(1)
//       if (sum === n) {                //O(1)
//         return true;                  //O(1)
//       }
//     }
//     return false;                     //O(1)
//   }
  
//   console.log(power(8));
//   console.log(power(128));
//   console.log(power(10));
// ==============================================================================================================================================================================
// factorial
// function fact(n) {          // O(1)
//     if (n === 1) return 1;    // O(1)
//     return n * fact(n - 1);   // O(n)
//   }
  
//   console.log(fact(5));
//   console.log(fact(6));
// ==============================================================================================================================================================================
// const arr = [1,1,2,2,3,4,5,6];
// const output = [];
// const map = new Map()
// for(let i = 0; i < arr.length; i++){
//     if(!map.has(arr[i])){
//         map.set(arr[i],true)
//         output.push(arr[i])
//     }
// }
// console.log(output)
// ==============================================================================================================================================================================
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.prev = null;
//         this.next = null;
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     addToTail(data) {
//         const newNode = new Node(data);
//         if (this.head === null) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode;
//         }
//         this.size++;
//     }

//     putAfter(value, newData) {
//         let current = this.head;
//         while (current !== null && current.data !== value) {
//             current = current.next;
//         }
//         const newNode = new Node(newData);
//         newNode.prev = current;
//         newNode.next = current.next;
//         if (current.next !== null) {
//             current.next.prev = newNode;
//         } else {
//             this.tail = newNode;
//         }
//         current.next = newNode;
//         this.size++;
//     }

//     print() {
//         let current = this.head;
//         let result = "";
//         while (current) {
//             result += current.data + " ";
//             current = current.next;
//         }
//         console.log(result);
//     }
// }

// // Example usage:
// const dll = new DoublyLinkedList();
// dll.addToTail(10);
// dll.addToTail(20);
// dll.addToTail(40);
// dll.putAfter(20, 30);
// dll.putAfter(10, 15);
// dll.putAfter(20, 25);
// dll.putAfter(30, 35);
// dll.putAfter(40, 45);
// dll.putAfter(10, 12);
// dll.putAfter(10, 11);
// // dll.putAfter(40, 41);
// // dll.putAfter(20, 21);

// dll.print(); // Output: 10 20 30 40
// ==============================================================================================================================================================================
// const nums = [[1, 2, 3], [4, 5], [6, 7, 8]];
// const flattenedArray = [];

// function flattenArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             flattenArray(arr[i]);
//         } else {
//             flattenedArray.push(arr[i]);
//         }
//     }
// }

// flattenArray(nums);
// console.log(flattenedArray); 
// ==============================================================================================================================================================================
// function binerySearch(arr,target,leftIndex,rightIndex){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex){
//     let middelIndex = Math.floor((leftIndex + rightIndex)/2)
//     if(target === arr[middelIndex]){
//         return target
//     }
    
//     if(target < arr[middelIndex]){
//         return search(arr,target,leftIndex,middelIndex-1)
//     }else{
//         return search(arr,target.middelIndex+1,rightIndex)
//     }
// }
// console.log(binerySearch([1,2,3,4,5],5))
