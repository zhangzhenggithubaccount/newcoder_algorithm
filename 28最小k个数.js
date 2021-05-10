function GetLeastNumbers_Solution(input, k) {
    let len = input.length;
    if(len < k) return [];
    for(let i = 0; i < k; i++) {
        for(let j = len - 1; j > i; j--) {
            if(input[j] < input[j - 1]) {
                let temp = input[j - 1];
                input[j - 1] = input[j];
                input[j] = temp;
            }
        }
    }
    console.log(input);
    return input.slice(0, k);
}

let res = GetLeastNumbers_Solution([4,8,5,6,2,7,3,8],7 );
console.log(res);