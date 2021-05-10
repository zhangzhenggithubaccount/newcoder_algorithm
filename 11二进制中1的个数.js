function NumberOf1(n){
    let count = 0;
    while(n) {
        count++;
        n = n & (n - 1);
    }
    return count;
}
let count = NumberOf1(10);
console.log(count);