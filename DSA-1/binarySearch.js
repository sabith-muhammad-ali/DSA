function binarySearch(arr,target) {
  let leftIndex = 0
  let rightIndex = arr.length-1
  while (leftIndex <= rightIndex) {
    let middelIndex = Math.floor((leftIndex + rightIndex) /2)
    if (target === arr[middelIndex]) {
      return middelIndex
    }
    if (target < arr[middelIndex]) {
      rightIndex = middelIndex -1
    } else {
      leftIndex = middelIndex +1
    }
  }
  return -1
}       

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], -5));
console.log(binarySearch([-5, 2, 4, 6, 10], -51));
