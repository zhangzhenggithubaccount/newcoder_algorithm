function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function IsBalanced_Solution(pRoot){
    const treeDepth = (root) => {
        if(!root)
            return 0;
        let left = treeDepth(root.left);
        let right = treeDepth(root.right);
        depth.set(root, (Math.max(left, right) + 1));
        return Math.max(left, right) + 1;
    }
    const judge = (root) => {
        if(!root)
            return true;
        return (Math.abs((root.left? depth.get(root.left): 0) - (root.right?depth.get(root.right):0)) <= 1) &&
        judge(root.left) && judge(root.right);
    }
    let depth = new Map();
    treeDepth(pRoot);
    console.log(depth);
    return judge(pRoot);
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