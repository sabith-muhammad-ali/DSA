class Heap {
  constructor() {
    this.arr = [];
  }

  getparent(i) {
    return Math.floor(i - 1 / 2);
  }

  getLeftChaild(i) {
    return i * 2 + 1;
  }

  getRightChaild(i) {
    return i * 2 + 2;
  }

  swap(i, j) {
    let temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }

  insert(data) {
    this.arr[this.arr.length] = data;
    this.heapfyUp()
  }

  heapfyUp(){
    let index = this.arr.length-1
    while (this.arr[index] < this.arr[this.getparent(index)]) {
        this.swap(index, this.getparent(index))
        index = this.getparent(index)
    }
  }
 
  removeRoot(){
    let root = this.arr[0]
    let last = this.arr.pop()

    if(this.arr.length > 0){
        this.arr[0] = last
        this.heapfyDown(0,this.arr.length)
    }
    return root
  }

  heapfyDown(index,arrLength){
    let largest = index
    let left = this.getLeftChaild(index)
    let right = this.getRightChaild(index)

    if (left < arrLength && this.arr[left] < this.arr[largest]) {
        largest = left
    }

    if (right < arrLength && this.arr[right] < this.arr[largest]) {
        largest = right
    }

    if (largest != index) {
        this.swap(index,largest)
        this.heapfyDown(largest,arrLength)
    }
  }

  buildHeap(){
    let length = this.arr.length
    for(let i = Math.floor(length/2) -1; i >= 0; i--){
        this.heapfyDown(i,length)
    }
  }

  heapSort(){
    this.buildHeap()
    for(let i = this.arr.length-1; i >= 0; i--){
        this.swap(0,i)
        this.heapfyDown(0,1)
    }
  }
}

let heap = new Heap()
heap.insert(100)
heap.insert(20)
heap.insert(35)
heap.insert(1)
heap.insert(9)
heap.insert(60)
console.log(heap.arr)
