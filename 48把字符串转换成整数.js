//int 的范围是[2^31 - 1, -2^31]
// return Number(str) || 0; 最简单的方法
function StrToInt1(str){
    return Number(str) || 0;
}
let res1 = StrToInt1('1565');
console.log(typeof res1);
console.log(res1);

function StrToInt2(str){
    let sign = '+', sum = 0;
    for(let i = 0; i < str.length; i++) {
        if(i == 0 && (str[i] === '-' || str[i] === '+')) {
            sign = str[i];
        }else if(!isNaN(str[i])){
            sum *= 10;
            sum += Number(str[i]);
        }else {
            return 0;
        }
    }
    return sign === '+'? sum: -sum;
}
let res2 = StrToInt2('1565');
console.log(typeof res2);
console.log(res2);