function recursiveFib(n) {
    if(n< 2) {
        return n
    }

    return recursiveFib(n-1) + recursiveFib(n-2);
}
console.log(recursiveFib(0));
console.log(recursiveFib(1));
console.log(recursiveFib(6));

function reverseString(str) {
    if (str === "") {
        return ""; 
    } else {
        
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverseString("hello")); 



function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); 


  function arraySum(arr, index = 0) {
    if (index === arr.length) {
        return 0;
    }
    
    return arr[index] + arraySum(arr, index + 1);
}
const arr = [1, 2, 3, 4, 5];
console.log(arraySum(arr)); // Outputs: 15 (1 + 2 + 3 + 4 + 5)
