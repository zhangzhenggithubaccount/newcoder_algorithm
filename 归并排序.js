//缺点：创建许多额外的内存空间
function mergeSort(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    let result = [];
    while (left.length>0 && right.length>0) {
         if (left[0] <= right[0]) {
            result.push(left.shift());
        }else {
            result.push(right.shift());
        }
    }
    while (left.length)
    result.push(left.shift());
    while (right.length)
    result.push(right.shift());
    return result;
}
let res = mergeSort([1,2,3,4,5,6,7,0]);
console.log(res);