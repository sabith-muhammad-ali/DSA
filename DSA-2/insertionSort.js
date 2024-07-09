function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let nti = arr[i]; // number to insert
    let j = i - 1;
    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j];
      j--
    }
    arr[j + 1] = nti;
  }
}

let arr = [7,8,5,2,4,6,3,1];
insertSort(arr);
console.log(arr);
