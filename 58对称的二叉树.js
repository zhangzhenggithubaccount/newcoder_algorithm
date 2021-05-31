function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function isSymmetrical(pRoot){
    
    if(pRoot === null) return true;
    return jude(pRoot.left, pRoot.right);

}
function jude(lNode, rNode) {
    if(lNode === null && rNode === null) {
        return true;
    }else if(lNode === null || rNode === null) {
        return false;
    }
    if(lNode.val !== rNode.val) {
        return false;
    } else {
        return jude(lNode.left, rNode.right) && jude(lNode.right, rNode.left);
    }
}
let root = new TreeNode(1);
let t1 = new TreeNode(2);
let t2 = new TreeNode(2);
let t3 = new TreeNode(3);
let t4 = new TreeNode(4);
let t5 = new TreeNode(3);
let t6 = new TreeNode(4);
root.left = t1;
root.right = t2;
t1.left = t3;
t1.right = t4;
t2.left = t6;
t2.right = t5;

let res = isSymmetrical(root);
console.log(res);