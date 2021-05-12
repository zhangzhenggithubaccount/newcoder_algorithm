function InversePairs1(data){
    
    let count = 0;
    for(let i = 0; i < data.length; i++) {
        for(let j = i; j < data.length; j++) {
            if(data[i] > data[j]) count++;
        }
    }
    return count;

}

//let res1 = InversePairs1([1,2,3,4,5,6,7,0]);
//console.log(res1);
let count = 0;
function InversePairs2(data){

    if(data.length < 2)
        return data;
    let mid = Math.floor(data.length / 2);
    let left = InversePairs2(data.slice(0, mid));
    let right = InversePairs2(data.slice(mid));

    return merge(left, right);
    
}
function merge(left, right) {
    let result = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] > right[0]){
            result.push(right.shift());
            count += left.length;
        }else {
            result.push(left.shift());
        }
    }
    if(left.length) result = result.concat(left);
    if(right.length) result = result.concat(right);
    return result;
}

let res = InversePairs2([1,2,3,4,5,6,7,0]);
console.log(res);
console.log(count);