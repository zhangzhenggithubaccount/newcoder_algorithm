function ReverseSentence(str){
    if(!str) return '';
    let sent = str.split(' ');
    let left = 0, right = sent.length - 1;
    while(left < right) {
        let temp = sent[left];
        sent[left] = sent[right];
        sent[right] = temp;
        left++;
        right--;
    }
    return sent.join(' ');
}
let res = ReverseSentence("nowcoder. a am I");
console.log(res);