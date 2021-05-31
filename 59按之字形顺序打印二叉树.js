function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Print(pRoot){

    if(!pRoot) return [];
    let queue = [pRoot];
    let res = [];
    let layer = 1;
    while(queue.length > 0) {
        let temp = [];
        let ret = [];
        while(queue.length > 0) {
            let node = queue.shift();
            if(layer % 2 === 1) {
                ret.push(node.val)
            }else {
                ret.unshift(node.val);
            }
            if(node.left) temp.push(node.left);
            if(node.right) temp.push(node.right);
        }
        res.push(ret);
        queue = queue.concat(temp);
        layer++;
    }
    return res;
}

let t8 = new TreeNode(8);
let t6 = new TreeNode(6);
let t10 = new TreeNode(10);
let t5 = new TreeNode(5);
let t7 = new TreeNode(7);
let t9 = new TreeNode(9);
let t11 = new TreeNode(11);

t8.left = t6;
t8.right = t10;
t6.left = t5;
t6.right = t7;
t10.left = t9;
t10.right = t11;

let res = Print(t8);
console.log(res);