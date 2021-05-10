function InversePairs(data){
    if (!data || data.length < 2) {
        return 0;
    }
    // 从已有的数组中返回选定的元素，此处是对数组的复制
    // 辅助数组
    let copy = data.slice(),
        count = 0;
    count = mergeSort(data, copy, 0, data.length-1);
    return count % 1000000007;
}
function mergeSort(data, copy, start, end){
    // 说明子序列的长度为1，无需再次分解
    if (end === start) {
        return 0;
    }
    // 化成二进制数，右移一位，相当于找数组的中点
    let mid = (end + start) >> 1,
        left = mergeSort(copy, data, start, mid),
        right = mergeSort(copy, data, mid+1, end),
        count = 0,
        p = start,//左数组的起点
        q = mid+1,//右数组的起点
        copyIndex = start;// 辅助数组下标，从第一个算起
    while (p <= mid && q <= end) {
        if (data[p] > data[q]) {
            // 这一行是核心，去统计逆序对的个数，统计的基础是在归并排序的合并过程中，合并的两个子序列都是有序的
            count += mid-p+1;
            copy[copyIndex++] = data[q++];
        } else {
            copy[copyIndex++] = data[p++];
        }
    }
    // 以下两个while循环是为了将剩余区间内的数放入辅助数组
    while (p <= mid) {
        copy[copyIndex++] = data[p++];
    }
    while (q <= end) {
        copy[copyIndex++] = data[q++];
    }
    return (left + right + count);
}
let count = InversePairs([1,2,3,4,5,6,7,0]);
console.log(count);