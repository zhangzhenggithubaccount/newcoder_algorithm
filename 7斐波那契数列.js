function Fibonacci(n){
    let a = 1;
    let b = 1;
    for(let i = 2; i < n; i++) {
        b = a + b;
        a = b - a;
    }
    return b;
}
let b = Fibonacci(5);
console.log(b);