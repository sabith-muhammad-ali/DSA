// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
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
//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.tail++;
//   }
//   search(value) {
//     let i = 0;
//     let curr = this.head;
//     while (curr) {
//       if (curr.value === value) {
//         return i
//       }
//       i++;
//       curr = curr.next;
//     }
//   }
//   reverse() {
//     let prev = null;
//     let curr = this.head;
//     while (curr) {
//       let next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.head = prev;
//   }
  // insert(value, index) {
  //   if (index === 0) {
  //     this.prepend(value);
  //   } else {
  //     let node = new Node(value);
  //     let prev = this.head;
  //     for (let i = 0; i < index - 1; i++) {
  //       prev = prev.next;
  //     }
  //     node.next = prev.next.next;
  //     prev.next = node;
  //   }
  //   this.size++;
  // }
//   removeValue(value) {
//     if (this.head.value === value) {
//       this.head = this.head.next;
//     } else {
//       let prev = this.head;
//       while (prev.next && prev.next.value !== value) {
//         prev = prev.next;
//       }
//       if (prev.next) {
//         prev.next = prev.next.next;
//       }
//     }
//     this.size--;
//   }
//   findMidel() {
//     let one = this.head;
//     let two = this.head;
//     while (two && two.next) {
//       one = one.next;
//       two = two.next.next;
//     }
//     console.log(`middel Man: ${one.value}`);
//   }
//   deleteMiddel(){
//     let prev = null
//     let one = this.head
//     let two = this.head
//     while (two && two.next) {
//         prev = one
//         one = one.next;
//         two = two.next.next;
//     }
//     if(prev){
//         prev.next = prev.next.next
//     }
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
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.prepend(40);
// list.prepend(50);
// list.prepend(60);
// list.append(5);
// list.print();
// list.findMidel();
// list.deleteMiddel()
// list.print();
// ===================================================================================================================================================
// function binarySearch(arr,target){
//   let leftIndex = 0
//   let rightIndex = arr.length-1
//   while(leftIndex <= rightIndex){
//       let middelIndex = Math.floor((leftIndex + rightIndex) /2)
//       if(target === arr[middelIndex]){
//           return middelIndex
//       }
//       if(target < arr[ middelIndex ]){
//           rightIndex = middelIndex -1
//       }else{
//           leftIndex = middelIndex +1
//       }
//   }
//   return -1
// }
// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10], 6));
// console.log(binarySearch([-5, 2, 4, 6, 10], -5));
// console.log(binarySearch([-5, 2, 4, 6, 10], -51));
// ===================================================================================================================================================
// function binarySearch(arr, target) {
//   return search(arr, target, 0, arr.length - 1);
// }
// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }
//   let middelIndex = Math.floor((leftIndex + rightIndex) / 2);
//   if (target === arr[middelIndex]) {
//     return middelIndex;
//   }
//   if (target < arr[middelIndex]) {
//     return search(arr, target, leftIndex, middelIndex - 1);
//   } else {
//     return search(arr, target, middelIndex + 1, rightIndex);
//   }
// }
// console.log(binarySearch([-5, 2, 4, 6, 10], 10));
// console.log(binarySearch([-5, 2, 4, 6, 10], 6));
// console.log(binarySearch([-5, 2, 4, 6, 10], -5));
// console.log(binarySearch([-5, 2, 4, 6, 10], -51));
// ===================================================================================================================================================
// let jaggedArray = [
//   [1, 2, 3],      
//   [4, 5],         
//   [6, 7, 8, 9],   
//   [10]            
// ];
// function flattJaggedArray(arr){
//   let result = []
//   arr.forEach(element => {
//       if(Array.isArray(element)){
//           result = result.concat(flattJaggedArray(element))
//       }else{
//           result.push(element)
//       }
//   })
//   return result
// }
// let flatArray = flattJaggedArray(jaggedArray)
// console.log(flatArray)
// ===================================================================================================================================================
// let str = 'muhammad'
// let count = {}
// for(let letter of str){
//     if(count[letter]){
//         count[letter]++
//     }else{
//         count[letter] = 1
//     }
// }
// console.log(count)
// ===================================================================================================================================================
// function recursiveFib(value){
//   if( value < 2 ){
//       return value
//   }
//   return recursiveFib(value - 1) + recursiveFib(value - 2)
// }
// console.log(recursiveFib(0));
// console.log(recursiveFib(1));
// console.log(recursiveFib(6));
// ===================================================================================================================================================
// let str = 'hello'
// let output = ''
// for(let i = str.length-1; i >= 0; i--){
//      output += str[i]
// }
// console.log(output)
// ===================================================================================================================================================
// class Node{
//   constructor(value){
//       this.value = value
//       this.next = null
//       this.prev = null
//   }
// }
// class LinkedList{
//   constructor(){
//       this.head = null
//       this.size = 0
//   }
//   isEmpty(){
//       return this.size === 0
//   }
//   prepend(value){
//       const node = new Node(value)
//       if(this.isEmpty()){
//           this.head = node
//       }else{
//           node.next = this.head
//           this.head.prev = node
//           this.head = node
//       }
//       this.size++
//   }
//   print(){
//       let curr = this.head
//       let listValues = ''
//       while(curr){
//           listValues += `${curr.value} `
//           curr = curr.next
//       }
//       console.log(listValues)
//   }
// }
// let list = new LinkedList()
// list.prepend(50)
// list.prepend(40)
// list.prepend(30)
// list.prepend(20)
// list.prepend(10)
// list.print()
// ===================================================================================================================================================
// class Node {
//   constructor(data) {
//       this.data = data;
//       this.prev = null;
//       this.next = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//       this.head = null;
//       this.tail = null;
//       this.size = 0;
//   }
//   isEmpty(){
//       return this.size === 0
//   }
//   prepend(value){
//       const node = new Node(value)
//       if(this.isEmpty()){
//           this.head = node
//           this.tail = node
//       }else{
//           node.next = this.head
//           this.head.prev = node
//           this.head = node 
//       }
//       this.size++
//   }
  // insert(value, index) {
  //     if (index === 0) {
  //         this.prepend(value);
  //     } else {
  //         let curr = this.head;
  //         const node = new Node(value);
  //         for (let i = 0; i < index - 1; i++) {
  //             curr = curr.next;
  //         }
  //         node.prev = curr;
  //         if (curr.next ) {
  //             node.next = curr.next;
  //             curr.next.prev = node;
  //         } else {
  //             this.tail = node;
  //         }
  //         curr.next = node;
  //         this.size++;
  //     }
  // }
//   print() {
//       let curr = this.head;
//       let result = "";
//       while (curr) {
//           result += `${curr.data} `;
//           curr = curr.next;
//       }
//       console.log(result);
//   }
// }


// let list = new DoublyLinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.print();
// list.insert(0,3)
// list.print()
// ===================================================================================================================================================
// class Node {
//   constructor(data) {
//       this.data = data;
//       this.prev = null;
//       this.next = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//       this.head = null;
//       this.tail = null;
//       this.size = 0;
//   }
//   isEmpty() {
//       return this.size === 0;
//   }
//   prepend(value) {
//       const node = new Node(value);
//       if (this.isEmpty()) {
//           this.head = node;
//           this.tail = node;
//       } else {
//           node.next = this.head;
//           this.head.prev = node;
//           this.head = node;
//       }
//       this.size++;
//   }
  // deleteVal(val){
  //   let curr = this.head
  //   while(curr){
  //     if(curr.data == val){
  //         if(curr.next === null ){
  //             curr.prev.next = null
  //             curr.prev = null
  //             this.tail = curr.prev
  //             return
  //         }
  //       curr.prev.next = curr.next
  //       curr.next.prev = curr.prev
  //     }
  //     curr = curr.next
  //   }
  // }
//   print() {
//       let curr = this.head;
//       let result = "";
//       while (curr) {
//           result += `${curr.data} `;
//           curr = curr.next;
//       }
//       console.log(result);
//   }
// }

// let list = new DoublyLinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.print();
// list.deleteVal(10);
// list.print();
// ===================================================================================================================================================
// class Node {
//   constructor(value) {
//       this.value = value;
//       this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//       this.head = null;
//       this.size = 0;
//   }
  
//   isEmpty() {
//       return this.size === 0;
//   }
  
//   prepend(value) {
//       const node = new Node(value);
//       if (this.isEmpty()) {
//           this.head = node;
//       } else {
//           node.next = this.head;
//           this.head = node;
//       }
//       this.size++;
//   }
  
//   toArray() {
//       let arr = [];
//       let curr = this.head;
//       while (curr) {
//           arr.push(curr.value);
//           curr = curr.next;
//       }
//       return arr;
//   }

//   print() {
//       let curr = this.head;
//       let listValues = '';
//       while (curr) {
//           listValues += `${curr.value} `;
//           curr = curr.next;
//       }
//       console.log(listValues.trim());
//   }
// }

// let list = new LinkedList();
// list.prepend(50);
// list.prepend(40);
// list.prepend(30);
// list.prepend(20);
// list.prepend(10);
// list.print(); // Output: 10 20 30 40 50

// let arrayRepresentation = list.toArray();
// console.log(arrayRepresentation); // Output: [10, 20, 30, 40, 50]
// ===================================================================================================================================================
// searchBeforeValueDeltet
// class Node {
//   constructor(data) {
//       this.data = data;
//       this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//       this.head = null;
//   }
//   prepend(data) {
//       const newNode = new Node(data);
//       newNode.next = this.head;
//       this.head = newNode;
//   }
  // searchRemove(value) {
  //     let prev = null
  //     let curr = this.head
  //     let next = this.head.next
  //     while(next){
  //         if(next.data === value){
  //             if(prev === null){
  //                 this.head = this.head.next
  //             }else{
  //                 prev.next = curr.next
  //             }
  //             return
  //         }
  //         prev = curr
  //         curr = next
  //         next = next.next
  //     }
  // }
//   printList() {
//       let current = this.head;
//       let result = '';
//       while (current) {
//           result += current.data + ' ';
//           current = current.next;
//       }
//       console.log(result);
//   }
// }

// // Example usage:
// const sll = new SinglyLinkedList();
// sll.prepend(3);
// sll.prepend(2);
// sll.prepend(1);
// sll.printList();
// sll.searchRemove(2)
// sll.printList();  
// ===================================================================================================================================================