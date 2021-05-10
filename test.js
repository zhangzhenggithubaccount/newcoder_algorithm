function inversePairs(data) {
    
    if(!data && data.length < 2) return 0;
    let copy = data.slice();
    let count = 0;
    count = mergeSort(copy, data, 0, data.length - 1);
    return count;

}
function mergeSort(copy, data, start, end) {
    if(start === end) {
        return 0;
    }
    let mid = (start + end) >> 1;
    let left = mergeSort(data, copy, start, mid);
    let right = mergeSort(data, copy, mid + 1, end);
    let count = 0;
    let p = start;
    let q = mid + 1;
    let copyIndex = start;
    while(p <= mid && q <= end) {
        if(data[p] > data[q]) {
            copy[copyIndex++] = data[q++];
            count += mid - p + 1;
        }else {
            copy[copyIndex++] = data[p++];
        }
    }
    while(p <= mid) copy[copyIndex++] = data[p++];
    while(q <= end) copy[copyIndex++] = data[q++];
    return (left + right + count);
}
let res = inversePairs([1,2,3,4,5,6,7,0]);
console.log(res);