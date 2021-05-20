/*
题干：
        实现一个checkNum(num)函数，要求输入一个正整数N0，那么则将N0的各个位值（个位、十位、百位...）
    的数字进行平方求和，得到N1，然后对N1重复此过程。如果Ni这个数变为1，那么满足条件，打印true；
    或者出现无限循环但始终变不到1，则不满足条件，打印false。
问题：
    要求利用递归实现且仅暴露checkNum(num)函数，并执行下列语句输出结果：
    checkNum(10030);
    checkNum(71);
    示例：
    输入：19
    打印：true
    解释：
    1^2 + 9^2 = 82
    8^2 + 2^2 = 68
    6^2 + 8^2 = 100
    1^2 + 0^2 + 0^2 = 1
*/

function checkNum(num) {

    const check = (n) => {
        s.push(n);
        
        let tmp = 0;
        let numStr = n.toString();
        for(let i = 0; i < numStr.length; i++) {
            tmp += Math.pow(numStr[i], 2);
        }
        if(tmp === 1) {
            return true;
        }else if(s.indexOf(tmp) !== -1){
            return false;
        }else {
            return check(tmp);
        }
    }
    let s = [];
    return check(num);

}

let res = checkNum(10030);
console.log(res);