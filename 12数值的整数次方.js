/*剑指书中细节：
*1.当底数为0且指数<0时
*会出现对0求倒数的情况，需进行错误处理，设置一个全局变量；
*2.判断底数是否等于0
*由于base为double型，不能直接用==判断
*3.优化求幂函数
*当n为偶数，a^n =（a^n/2）*（a^n/2）
*当n为奇数，a^n = a^[(n-1)/2] * a^[(n-1)/2] * a
*时间复杂度O(logn)
*/

function Power(base, exponent){
    if(exponent < 0) {
        exponent = -exponent;
        base = 1 / base;
    }
    
    let ret = 1.0;
    while(exponent) {
        if(exponent & 1) {
            ret = ret * base;
        }
        base = base * base;
        exponent = exponent >> 1;
    }
    return ret;
}
let res = Power(2.000, 3);
console.log(res);