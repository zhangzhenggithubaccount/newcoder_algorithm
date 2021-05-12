//暴力破解
function multiply(array){

    if(array.length <= 1) return [];
    let res = [];
    for(let i = 0; i < array.length; i++) {
        let num = 1;
        for(let j = 0; j < array.length; j++) {
            if(j !== i) {
                num *= array[j];
            }
        }
        res.push(num);
    }
    return res;

}
let res = multiply([1, 2, 3, 4, 5]);
console.log(res);
//
function multiply2(array){

    if(array.length <= 1) return [];
    let res = [1];
    for(let i = 1; i < array.length; i++) {
        res[i] = res[i-1] * array[i-1];
    }
    console.log(res);
    let temp = 1;
    for(let j = array.length - 2; j >= 0; j--) {
        temp *= array[j+1];
        res[j] *= temp;
    }
    return res;

}
let res2 = multiply2([1, 2, 3, 4, 5]);
console.log(res2);