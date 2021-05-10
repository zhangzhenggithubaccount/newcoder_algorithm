function GetUglyNumber_Solution(index){
    if(index <= 0) return 0;
    let p2 = 0, p3 = 0, p5 = 0;
    let result = [1];
    for(let i = 1; i < index; i++) {
        result[i] = Math.min(result[p2] * 2, result[p3] * 3, result[p5] * 5);
        if(result[i] === result[p2] * 2) p2++;
        if(result[i] === result[p3] * 3) p3++;
        if(result[i] === result[p5] * 5) p5++;
    }
    return result[index - 1];
}
let res = GetUglyNumber_Solution(10);
console.log(res);
