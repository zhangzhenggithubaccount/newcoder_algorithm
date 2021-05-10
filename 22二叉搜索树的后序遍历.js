function VerifySquenceOfBST(sequence){
    let len = sequence.length;
    if(len === 0) return false;
    let i = 0;
    let root = sequence[len - 1];
    while(sequence[i] < root) i++;
    for(let j = i; j < len; j++) if(sequence[j] < root) return false;
    let left = true, right = true;
    if(i > 0) left = VerifySquenceOfBST(sequence.slice(0, i));
    if(i < (len - 1)) right = VerifySquenceOfBST(sequence.slice(i, len - 1));
    return left && right;
    
}

let flag = VerifySquenceOfBST([4,8,6,12,16,14,10]);
console.log(flag);

//非递归 
//非递归也是一个基于递归的思想：
//左子树一定比右子树小，因此去掉根后，数字分为left，right两部分，right部分的
//最后一个数字是右子树的根他也比左子树所有值大，因此我们可以每次只看有子树是否符合条件
//即可，即使到达了左子树左子树也可以看出由左右子树组成的树还想右子树那样处理
 
//对于左子树回到了原问题，对于右子树，左子树的所有值都比右子树的根小可以暂时把他看出右子树的左子树
//只需看看右子树的右子树是否符合要求即可
function VerifySquenceOfBST2(sequence){
    
    let len = sequence.length;
    if(!len) return false;
    let i = 0;
    while(--len) {
        while(sequence[i] < sequence[len]) i++;
        while(sequence[i] > sequence[len]) i++;
        if(i < len) return false;
        i = 0;
    }
    return true;
}

let flag2 = VerifySquenceOfBST2([4,8,6,12,16,14,10]);
console.log(flag2);