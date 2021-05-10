function LeftRotateString(str, n){
    if(!str) return '';
    let arr = str.split('');
    for(let i = 0; i < n; i++) {
        let item = arr.shift();
        arr.push(item);
    }
    return arr.join('');
}
let res = LeftRotateString("abcXYZdef", 4);
console.log(res);