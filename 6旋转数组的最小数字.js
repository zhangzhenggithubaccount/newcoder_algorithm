function minNumberInRotateArray(rotateArray)
{
    if(rotateArray.length === 0) return 0;
    let left = 0;
    let right = rotateArray.length - 1;
    
    if(rotateArray[left] < rotateArray[right]) return rotateArray[left];

    while(left < right) {

        let mid = Math.floor((left + right) / 2);
        
        if(left + 1 === right) return rotateArray[right];
        
        if(rotateArray[left] < rotateArray[right]) return rotateArray[left];

        if(rotateArray[left] > rotateArray[mid]) {
            right = mid;
        }else if(rotateArray[left] < rotateArray[mid]) {
            left = mid;
        }else {
            left++;
        }
    }
}
let res1 = minNumberInRotateArray([1,0,1,1,1]);
console.log(res1);
let res2 = minNumberInRotateArray([3,4,5,2,2]);
console.log(res2);