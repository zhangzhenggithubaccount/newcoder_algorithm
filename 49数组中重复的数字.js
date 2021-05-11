function duplicate( numbers ) {
    let temp = [];
    for(let i = 0; i < numbers.length; i++) {
        if(temp.indexOf(numbers[i]) === -1) {
            temp.push(numbers[i]);
        }else {
            return numbers[i];
        }
    }
    return -1;
}
let res = duplicate([2,3,1,0,2,5,3]);
console.log(res);