function selectionSort(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !==i) {
      let temp = arr[min]
      arr[min] = arr[i]
      arr[i] = temp
  }
  }

  return arr;
}
let arr = [64,25,19,37,11]
console.log(selectionSort(arr));