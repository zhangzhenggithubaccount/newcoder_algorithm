function Permutation(str)
{
    if(!str) return [];
    let result = [];
    arange(result, '', str);
    return result;
}
function arange(result, res, str) {
    if(str.length === 0) {
        result.push(res);
    }
    for(let i = 0; i < str.length; i++) {
        if(i > 0 && str[i] === str[i - 1]) {
            continue;
        }
        let left = str.substring(0, i);
        let right = str.substring(i+1);
        arange(result, res + str[i], left + right);
    }
}

let result = Permutation('ab');
console.log(result);