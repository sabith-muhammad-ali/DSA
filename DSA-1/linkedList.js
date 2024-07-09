// ============================================================================================================================================================================
// Linked List prepend
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("list is empty");
//     } else {
//       let curr = this.head;
//       let listValues = '';
//       while (curr) {
//         listValues += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(listValues);
//     }
//   }
// }

// const list = new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.print();
// ================================================================================================================================================================================
// Linked List Append
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//     }
//     this.size++;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("list is empty");
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

// const list = new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.append(40);
// list.append(50);
// list.print();
// =============================================================================================================================================================================
// remove value from linkidlist
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   prepend(value) {
//     const node  = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node
//     }else{
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }
//   removeValue(value){
//     if (this.isEmpty()) {
//       return null
//     }

//     if (this.head.value === value) {
//       this.head = this.head.next
//       this.size--
//       return value
//     } else {
//       let prev = this.head
//       while (prev.next && prev.next.value !== value) {
//         prev = prev.next
//       }
//       if (prev.next) {
//         const removedNode = prev.next
//         prev.next = removedNode.next
//         this.size--
//         return value
//       }
//       return null
//     }
//   }

//    print(){
//     if (this.isEmpty()) {
//       console.log('empty');
//     }else {
//       let curr = this.head
//       let listValues = '';
//       while (curr) {
//         listValues += `${curr.value} `
//         curr = curr.next;
//       }
//       console.log(listValues);
//     }
//    }
// }
// const list = new LinkedList()
// list.prepend(30)
// list.prepend(25)
// list.prepend(20)
// list.prepend(10)
// list.print()
// list.removeValue(20)
// list.print()
// =============================================================================================================================================================================
// search node from given value
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty(){
//         return this.size === 0;
//     }

//     prepend(value){
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     search(value) {
//         if (this.isEmpty()) {
//             return console.log('no values');
//         }

//         let i = 0;
//         let curr = this.head;
//         while (curr) {
//             if (curr.value === value) {
//                 return i;
//             }
//             curr = curr.next;
//             i++;
//         }
//         return -1;
//     }

//     print(){
//         if (this.isEmpty()) {
//             console.log("empty");
//         } else {
//             let curr = this.head
//             let listValues = '';
//             while (curr) {
//                 listValues += `${curr.value} `
//                 curr = curr.next;
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new LinkedList()
// list.prepend(30)
// list.prepend(20)
// list.prepend(10)
// list.print();
// console.log(list.search(30)); // index 2
// ===================================================================================================================================================================================
// reverse linkedilst
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
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

//   print() {
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
// list.prepend(30)
// list.prepend(20)
// list.prepend(10)
// list.print()
// list.reverse()
// list.print()
// =====================================================================================================================================================
// linkedList Tail&head  prepend()
// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node;
//             this.tail = node
//         }else{
//             node.next = this.head;
//             this.head = node
//         }
//         this.size++
//     }
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
// list.prepend(40)
// list.prepend(50)
// list.print()
// ==========================================================================================================================================================================
// linked List Tail add last 
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     append(value){
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }
//         this.size++
//     }
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
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.print()
// ===========================================================================================================================================================================
// remove from front
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     prepend(value){
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     removeFromFront(){
//         if (this.isEmpty()) {
//             return null
//         } else {
//             const value = this.head.value
//             this.head = this.head.next
//             this.size--
//             return value
//         }
//     }
//     print(){
//         if (this.isEmpty()) {
//             console.log("no values in linkedlist")
//         } else {
//             let curr = this.head
//             let listValues ='';
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues)
//         }
//     }
// }
// const list = new LinkedList()
// list.prepend(40)
// list.prepend(30)
// list.prepend(20)
// list.prepend(10)
// list.removeFromFront()
// list.print()
// ============================================================================================================================================================================
// remove from back double LL
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     getSize(){
//         return this.size
//     }
//     prepend(value){
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     removeFromEnd(){
//         if (this.isEmpty()) {
//             return null
//         }
//         const value = this.tail.value
//         if (this.size === 1) {
//             this.head = null
//             this.tail = null
//         } else {
//             let prev = this.head
//             while (prev.next !== this.tail) {
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size--
//         return value
//     }
//     print(){
//         if (this.isEmpty()) {
//             console.log("no values in linkedlist")
//         } else {
//             let curr = this.head
//             let listValues ='';
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues)
//         }
//     }
// }
// const list = new LinkedList()
// list.prepend(40)
// list.prepend(30)
// list.prepend(20)
// list.prepend(10)
// list.print()
// list.removeFromEnd()
// list.print()
// ===========================================================================================================================================================================