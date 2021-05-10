function perm(result, num, numbers) {
    if(numbers.length === 0) {
        result.push(num);
    }
    for(let i = 0; i < numbers.length; i++) {
        if(i > 0 && numbers[i - 1] === numbers[i]) 
            continue;
        let left = numbers.slice(0, i);
        let right = numbers.slice(i+1);
        perm(result, num.concat(numbers[i]), left.concat(right));
    }
}
function PrintMinNumber(numbers){
    let result = [];
    let min = 0;
    perm(result, [], Object.keys(numbers));
    for(let i = 0; i < result.length; i++) {
        let num = '';
        for(let j = 0; j < result[i].length; j++) {
            num += numbers[result[i][j]];
        }
        
        if(min === 0 || min > num) min = num;
    }
    return min;
}

let min = PrintMinNumber([3,32,321]);
console.log(min);
