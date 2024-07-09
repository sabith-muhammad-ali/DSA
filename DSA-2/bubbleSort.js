function bubbleSort(arr){
  for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length - i - 1; j++){
          if(arr[j] > arr[j+1]){
              let temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j+1] = temp
          }
      }
  }
}
let arr = [5,1,4,2,8,9]
bubbleSort(arr)
console.log(arr) //[ 1, 2, 4, 5, 8, 9 ]