function FirstNotRepeatingChar(str){
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++) {
        if(i === arr.indexOf(arr[i]) && i === arr.lastIndexOf(arr[i])) {
            return i;
        }
    }
    return -1;
}
let res = FirstNotRepeatingChar('google');
console.log(res);