//二分查找
function GetNumberOfK1(data, k){
    let i = 0, j = 0;
    while(data[i] !== k) i++;
    j = i;
    while(data[j] === k) j++;
    return (j - i);
}
console.time();
let res1 = GetNumberOfK1([1, 2, 3, 3, 3, 3, 3, 3, 4, 5], 3);
console.timeEnd();
console.log(res1);

function GetNumberOfK2(data, k)
{
    let count = 0;
    for(let i = 0; i < data.length; i++){
        if(data[i] > k) break;
        if(data[i] === k) count++;
        
    }
    return count;
}
console.time();
let res2 = GetNumberOfK2([1, 2, 3, 3, 3, 3, 3, 3, 4, 5], 3);
console.timeEnd();
console.log(res2);