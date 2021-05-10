// 应为可以横着放或竖着放，多以f(n)可以是2*(n-1)的矩形加一个竖着放的2*1的矩形
// 或2*(n-2)的矩形加2横着放的，即f(n)=f(n-1)+f(n-2)

// 当到了最后，f(1)=1,f(2)=2
function rectCover(number){
    if(number < 4) return number;
    let a = 2;
    let b = 3;
    for(let i = 3; i < number; i++) {
        b = a + b;
        a = b - a;
    }
    return b;
}
let b = rectCover(4);
console.log(b);