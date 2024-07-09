function recursiveFac(n) {
    if (n === 0) {
        return 1
    }
    return n * recursiveFac(n-1);
}
console.log(recursiveFac(0));
console.log(recursiveFac(1));
console.log(recursiveFac(5));