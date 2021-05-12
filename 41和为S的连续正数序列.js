//滑动窗口
function FindContinuousSequence(sum){
    let arr = [];
    for(let i = 1; i < sum; i++) {
        arr[i-1] = i;
    }
    let j = 0, k = 0;
    let res = [], cur = arr[0];
    while(j < (sum - 1) && k < (sum - 1)) {
        if(cur < sum) {
            k++;
            cur += arr[k];
        }else if(cur > sum) {
            j++;
            k = j;
            cur = arr[j];
        }else {
            res.push(arr.slice(j, k + 1));
            j++;
            k = j;
            cur = arr[j];
        }
    }
    return res;
}
let res = FindContinuousSequence(9);
console.log(res);