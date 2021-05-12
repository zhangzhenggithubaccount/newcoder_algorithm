function NumberOf1Between1AndN_Solution(n){
    let ret = 0;
    for(let i = 1; i <= n; i++) {
        let str = i.toString();
        let flag = true;
        for(let j = 0; j < str.length; j++) {
            if(str[j] === '1') {
                ret++
                if(flag) {
                    console.log(str);
                    flag = false;
                }
            };
        }
    }
    return ret;
}
let res = NumberOf1Between1AndN_Solution(13);
console.log(res);