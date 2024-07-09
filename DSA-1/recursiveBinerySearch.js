function recursiveBinerySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middelIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middelIndex]) {
    return middelIndex;
  }

  if (target < arr[middelIndex]) {
    return search(arr, target, leftIndex, middelIndex - 1);
  } else {
    return search(arr, target, middelIndex + 1, rightIndex);
  }
}
console.log(recursiveBinerySearch([-5, 2, 4, 6, 10], 10));//4
console.log(recursiveBinerySearch([-5, 2, 4, 6, 10], 6));//3
console.log(recursiveBinerySearch([-5, 2, 4, 6, 10], 7));//-1
