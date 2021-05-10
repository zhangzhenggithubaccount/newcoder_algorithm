function FindNumbersWithSum(array, sum){
    if(array.length < 2) return [];
    let res = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = i; j < array.length; j++) {
            if(array[i] + array[j] > sum) {
                break;
            }else if(array[i] + array[j] === sum) {
                let d = [array[i], array[j]];
                res.push(d);
            }
        }
    }
    if(res.length === 0) return [];
    let ret = res[0], min = res[0][0] * res[0][1];
    for(let k = 1; k < res.length; k++) {
        if(res[k][0] * res[k][1] < min) {
            ret = res[k];
        }
    }
    return ret;
}
let res = FindNumbersWithSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15);
console.log(res);

function FindNumbersWithSum2(array, sum){
    if(array.length < 2) return [];
    let res = [];
    for(let i = 0; i < array.length; i++) {
        let idx = array.lastIndexOf(sum - array[i]);
        if(idx !== -1 && idx > i) {
            let d = [array[i], array[idx]];
            res.push(d);
        }
    }
    if(res.length === 0) return [];
    let ret = res[0], min = res[0][0] * res[0][1];
    for(let i = 1; i < res.length; i++) {
        if(res[i][0] * res[i][1] < min) {
            ret = res[i];
        }
    }
    return ret;
}
let res2 = FindNumbersWithSum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15);
console.log(res2);

function FindNumbersWithSum3(array, sum)
{
    if(array.length < 2) return [];
    let res = [];
    let left = 0, right = array.length - 1;
    while(left < right) {
        if(array[left] + array[right] < sum) {
            left++;
        }else if(array[left] + array[right] > sum) {
            right--;
        }else{
            res.push(array[left], array[right]);
            break;
        }
    }
    return res;
}
let res3 = FindNumbersWithSum3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15);
console.log(res3);