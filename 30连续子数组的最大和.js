//动态规划的方法
//dp[i] 表示以i结尾的连续子数组的最大和。所以最终要求dp[n-1]
function FindGreatestSumOfSubArray1(array) {
    if(!array.length) return 0;
    if(array.length === 1) return array[0];
    let dp = [array[0]];
    let max = array[0];
    for(let i = 1; i < array.length; i++) {
        dp[i] = Math.max(array[i], dp[i - 1] + array[i]);
        max = Math.max(max, dp[i]);
    }
    return max;
}
let res1 = FindGreatestSumOfSubArray1([1,-2,3,10,-4,7,2,-5]);
console.log(res1);

//空间复杂度O(1)解法
function FindGreatestSumOfSubArray2(array) {
    let i = 0, j = 0;
    let idxI = 0, idxJ = 0;
    let max = 0, cur = 0;
    for(let k = 0; k < array.length; k++) {
        if(cur + array[k] < 0) {
            cur = 0;
            i = k + 1, j = k + 1;
        }else {
            cur += array[k];
            j = k;
        }
        if(max < cur) {
            max = cur;
            idxI = i;
            idxJ = j;
        }
    }
    console.log(array.slice(idxI, idxJ + 1));
    return max? max: Math.max.apply(this,array);
}

let res2 = FindGreatestSumOfSubArray2([1,-2,3,10,-4,7,2,-5]);
console.log(res2);