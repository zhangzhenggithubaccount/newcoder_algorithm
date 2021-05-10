function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function HasSubtree(pRoot1, pRoot2){
    let res = false;
    if(pRoot1 != null && pRoot2 != null){
    if(pRoot1.val == pRoot2.val) res = isSubtree(pRoot1, pRoot2);
    if(res == false) res = HasSubtree(pRoot1.left, pRoot2);
    if(res == false) res = HasSubtree(pRoot1.right, pRoot2);
    }
    return res;
}
function isSubtree(pRoot1, pRoot2) {
    if(pRoot2 == null) return true;
    if(pRoot1 == null) return false;
    if(pRoot1.val != pRoot2.val) return false;
    return isSubtree(pRoot1.left, pRoot2.left) && isSubtree(pRoot1.right, pRoot2.right);
}

let root = new TreeNode(0);
let p = root;
let q = root;
p.left = new TreeNode(1);
q.right = new TreeNode(2);
p = p.left;
q = q.right;
p.left = new TreeNode(3);
p.right = new TreeNode(4);
q.left = new TreeNode(5);
q.right = new TreeNode(6);
//console.log(root);
let subRoot = new TreeNode(2);
subRoot.left = new TreeNode(5);
subRoot.right = new TreeNode(6);
//console.log(subRoot);
let flag = HasSubtree(root, subRoot);
console.log(flag);