function fibnocci (n) {
    fib = [0,1];
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib
}

console.log(fibnocci(1));
console.log(fibnocci(5));
console.log(fibnocci(7));