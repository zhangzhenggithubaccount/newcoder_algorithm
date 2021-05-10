function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function PrintFromTopToBottom(root){
    let queue = [root];
    let res = [];
    while(queue.length) {
        let node = queue.shift();
        res.push(node.val);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return res;
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
let res = PrintFromTopToBottom(root);
console.log(res);