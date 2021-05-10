//模拟法
function LastRemaining_Solution(n, m){
    
    if(n === 0 || m === 0) return -1;
    
    let lt = [];
    for(let i = 0; i < n; i++) {
        lt.push(i);
    }
    let idx = 0;
    while(lt.length > 1) {
        idx = (idx + m - 1) % lt.length;
        lt.splice(idx, 1);
    }
    
    return lt.pop();
}
let res = LastRemaining_Solution(5, 3);
console.log(res);

//递归法
function LastRemaining_Solution2(n, m) {
    if(n === 1) return 0;
    let x = LastRemaining_Solution2(n - 1, m);
    return (m + x) % n;
}
let res2 = LastRemaining_Solution2(5, 3);
console.log(res2);

//迭代法
function LastRemaining_Solution3(n, m) {
    
    let last = 0;
    for(let i = 2; i <= n; i++) {
        last = (last + m) % i;
    }
    return last;
    
}
let res3 = LastRemaining_Solution3(5, 3);
console.log(res3);