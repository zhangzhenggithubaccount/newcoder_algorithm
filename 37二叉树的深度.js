function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function TreeDepth1(pRoot){

    if(!pRoot) return 0;
    let left = TreeDepth1(pRoot.left);
    let right = TreeDepth1(pRoot.right);
    return Math.max(left, right) + 1;
    
}
function TreeDepth2(pRoot) {

    if(!pRoot) return 0;
    let queue = [pRoot];
    let count = 0;
    while(queue.length > 0) {
        count++;
        let temp = [];
        while(queue.length > 0) {
            let node = queue.shift();
            if(node.left) temp.push(node.left);
            if(node.right) temp.push(node.right);
        }
        queue = queue.concat(temp);
    }
    return count;
}

let root = new TreeNode(0);
let t1 = new TreeNode(1);
let t2 = new TreeNode(2);
let t3 = new TreeNode(3);
let t4 = new TreeNode(4);
let t5 = new TreeNode(5);
let t6 = new TreeNode(6);
let t7 = new TreeNode(7);
let t8 = new TreeNode(8);
root.left = t1;
root.right = t2;
t1.left = t3;
t3.left = t4;
t3.right = t5;
t5.right = t6;
t6.left = t7;
t7.right = t8;

let res1 = TreeDepth1(root);
console.log(res1);

let res2 = TreeDepth2(root);
console.log(res2);