function Add(num1, num2) {

    let res1 = num1 ^ num2;//无进位
    let res2 = (num1 & num2) << 1;//有进位

    while(res2) {
        [res1, res2] = [res1 ^ res2, (res1 & res2) << 1]
    }

    return res1;

}
let res = Add(10, 3);
console.log(res);