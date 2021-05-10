function FindNumsAppearOnce( array ) {
    const map = {};
    array.forEach((item) => {
        if(!map[item]) {
            map[item] = 1;
        }else {
            delete(map[item]);
        }
    });
    return Object.keys(map).sort();
}
let res = FindNumsAppearOnce([1,4,1,6]);
console.log(res);

function FindNumsAppearOnce2( array ) {
    let num = 0, k = 1;
    for(let i = 0; i < array.length; i++) {
        num ^= array[i];
    }
    while(!(num & k)) {
        k <<= 1;
    }
    let sum = 0;
    for(let j = 0; j < array.length; j++) {
        if(array[j] & k) {
            sum ^= array[j];
        }
    }
    num ^= sum;
    let res = [];
    if(num < sum) {
        res.push(num);
        res.push(sum);
    }else {
        res.push(sum);
        res.push(num);
    }
    return res;
}
let res2 = FindNumsAppearOnce2([1,4,1,6]);
console.log(res2);