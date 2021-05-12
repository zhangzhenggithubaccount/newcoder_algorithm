function MoreThanHalfNum_Solution(numbers){
    let count = {};
    numbers.forEach(function(elem, idx) {
        if(elem in count) {
            count[elem] += 1;
        }else {
            count[elem] = 1;
        }
    });
    let len = numbers.length / 2;
    for(let key in count) {
        if(count[key] > len) return key;
    }
    return 0;
}

let res = MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]);
console.log(res);
