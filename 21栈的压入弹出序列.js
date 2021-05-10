function IsPopOrder(pushV, popV){
    let i = 0, j = 0;
    let stack = [];
    while(i < pushV.length) {
        if(pushV[i] !== popV[j]) {
            stack.push(pushV[i]);
            i++;
        }else {
            i++;
            j++;
            while(stack.length && stack[stack.length - 1] === popV[j]) {
                stack.pop();
                j++;
            }
        }
    }
    return !stack.length;
}

let flag = IsPopOrder([1,2,3,4,5],[4,3,2,1,5]);
console.log(flag);