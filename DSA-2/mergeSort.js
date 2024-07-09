// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length / 2);
//   let leftArr = arr.slice(0, mid);
//   let rightArr = arr.slice(mid);
//   return mearge(mergeSort(leftArr), mergeSort(rightArr));
// }
// function mearge(leftArr, rightArr) {
//   let sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift());
//     } else {
//       sortedArr.push(rightArr.shift());
//     }
//   }
//   return [...sortedArr, ...leftArr, ...rightArr];
// }
// let arr = [8, 2, 5, 7, 4, 3, 1,6];
// console.log(mergeSort(arr));
//========================================================================================================================================================================
function mergeSort(arr){
  if(arr.length <= 1){
      return arr
  }
  let mid = Math.floor(arr.length/2)
  let left = arr.slice(0,mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
  let sortedArr = []
  let i = 0
  let j = 0
  while( i < left.length && j < right.length){
      if(left[i] <= right[j]){
          sortedArr.push(left[i])
          i++
      }else{
          sortedArr.push(right[j])
          j++
      }
  }
  while( i < left.length){
      sortedArr.push(left[i])
      i++
  }
  while(j < right.length){
      sortedArr.push(right[j])
      j++
  }
  return sortedArr
}
let array1 = [4,1,3,2];
console.log(mergeSort(array1))


