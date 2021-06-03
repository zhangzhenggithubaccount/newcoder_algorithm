function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function KthNode(pRoot, k){

    if(!pRoot) return null;
    const inOrder = function(root) {
        if(!root) return null;
        inOrder(root.left);
        if(res.length === k) {
            return;
        }else {
            res.push(root.val);
        }
        inOrder(root.right);
    }
    
    let res = [];
    inOrder(pRoot);
    
    return res[res.length - 1];

}
let t5 = new TreeNode(5);
let t6 = new TreeNode(6);
let t7 = new TreeNode(7);
let t8 = new TreeNode(8);
let t9 = new TreeNode(9);
let t10 = new TreeNode(10);
let t11 = new TreeNode(11);

t8.left = t6;
t8.right = t10;
t6.left = t5;
t6.right = t7;
t10.left = t9;
t10.right = t11;

let res = KthNode(t8, 1);
console.log(res);