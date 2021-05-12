function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function IsBalanced_Solution(pRoot){
    if(!pRoot) return true;
    return (Math.abs(treeDepth(pRoot.left) - treeDepth(pRoot.right)) <= 1) && 
    IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}
function treeDepth(pRoot) {
    if(!pRoot) return 0;
    let left = treeDepth(pRoot.left);
    let right = treeDepth(pRoot.right);
    return Math.max(left, right) + 1;
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
t1.right = t4;
t2.left = t5;
t2.right = t6;
t3.left = t7;
t3.right = t8;
let res = IsBalanced_Solution(root)
console.log(res);