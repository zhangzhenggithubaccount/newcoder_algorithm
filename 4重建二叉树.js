function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
//[1,2,3,4,5,6,7],[3,2,4,1,6,5,7]
function reConstructBinaryTree(pre, vin){
    
    if(!pre.length || !vin.length) return null;
    let val = pre[0];
    let node = new TreeNode(val);
    let index = vin.indexOf(val);
    node.left = reConstructBinaryTree(pre.slice(1, index + 1), vin.slice(0, index));
    node.right = reConstructBinaryTree(pre.slice(index + 1), vin.slice(index + 1));
    return node;

}
let node = reConstructBinaryTree([1,2,3,4,5,6,7],[3,2,4,1,6,5,7]);
console.log(node);