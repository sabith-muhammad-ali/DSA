function initialize2DArray(rows, columns, defaultValue) {
    let array = [];
    for (let i = 0; i < rows; i++) {
        array.push([]);
        for (let j = 0; j < columns; j++) {
            array[i][j] = defaultValue;
        }
    }
    return array;
}

// Example usage:
let rows = 3;
let columns = 4;
let defaultValue = 0;
let array = initialize2DArray(rows, columns, defaultValue);

array[0][0] = 1;
array[1][2] = 5;
array[2][3] = 7;
console.log("Initialized 2D array:");
console.log(array);
// ===============================================================================================================================================================================

let str = "ggfhhffff"
let freq = {}
let maxChar = null
let maxFreq = 0
for(let char of str){
    if(freq[char]){
        freq[char]++
    }else{
        freq[char] = 1
    }
}
for(let char in freq ){
    if(freq[char] > maxFreq){
        maxChar = char
        maxFreq = freq[char]
    }
}
console.log(maxChar)
console.log(maxFreq)

