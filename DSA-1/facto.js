// problem : given an int 'n' faind the facrtorial if that number
function factorial (n) {
    let result = 1; 
    for(let i = 2; i <= n; i++){
        result *= i
    }
    return result
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));