// f(1) = 1
// f(2) = f(2-1) + f(2-2)
// f(3) = f(3-1) + f(3-2) + f(3-3) 
// ...
// f(n-1) = f((n-1) - 1) + f((n-1) - 2) + f((n-1) - 3) + ... + f((n-1)-(n-1))
//        = f(0) + f(1) + f(2) + ... + f(n-2)
// f(n) = f(n-1) + f(n-2) + f(n-3) + ... + f(n-(n-1)) + f(n-n) 
//      = [f(0) + f(1) + f(2) + ... + f(n-2)] + f(n-1)
//      = f(n-1) + f(n-1)
//      = 2 * f(n-1)
//  等比数列前n项和 s_n = a1(1- q^n)/(1-q)
function jumpFloorII(number){
    if(number < 1) return 0;
    let a = 1;
    for(let i = 1; i < number; i++) {
        a = 2 * a;
    }
    return a;
}
let a = jumpFloorII(3);
console.log(a);