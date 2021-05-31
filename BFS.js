function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function BFS(root) {
    if(root == null) return null;
    let queue = [root];
    while(queue.length !== 0) {
        let node = queue.shift();
        console.log(node.val);
        if(node.left !== null) queue.push(node.left);
        if(node.right !== null) queue.push(node.right);
    }
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
BFS(root);