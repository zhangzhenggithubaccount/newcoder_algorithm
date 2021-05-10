function IsContinuous(numbers) {

    numbers.sort((pre, nex) => {
        return pre - nex;
    });

    let i = 0, len = numbers.length;
    for(let j = 0; j < len; j++) {
        if(numbers[j] === 0) {
            i++;
            continue;
        }
        if(j + 1 < len && (numbers[j + 1] === numbers[j])) 
            return false;
    }
    return (numbers[len - 1] - numbers[i]) < 5;

}
let res = IsContinuous([0,3,2,6,4]);
console.log(res);