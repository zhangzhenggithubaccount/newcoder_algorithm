function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Print(pRoot){

    if(!pRoot) return [];
    let queue = [pRoot];
    let res = [];
    
    while(queue.length > 0) {
        let ret = [];
        let temp = [];
        while(queue.length > 0) {
            let node = queue.shift();
            temp.push(node.val);
            if(node.left) ret.push(node.left);
            if(node.right) ret.push(node.right);
        }

        res.push(temp);
        queue = queue.concat(ret);
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