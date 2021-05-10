//正则替换
function replaceSpace( s ) {
    return s.replace(/\s/g, '%20');
}
let str = replaceSpace('We Are Happy');
console.log(str);

//转为Array
function replaceSpace( s ) {
    let arr = s.split('').map(item=>{
        return item === ' '? '%20' : item;
    });
    return arr.join('');
}