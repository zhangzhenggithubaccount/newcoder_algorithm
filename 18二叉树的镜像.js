function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
//递归的方法
function Mirror(pRoot) {
    if(pRoot == null) return pRoot;
    let temp = pRoot.left;
    pRoot.left = pRoot.right;
    pRoot.right = temp;
    Mirror(pRoot.left);
    Mirror(pRoot.right);
    return pRoot;
}
//BFS的方法
function Mirror2(pRoot) {
    if(pRoot == null) return pRoot;
    let queue = [pRoot];
    while(queue.length !== 0) {
        let node = queue.shift();
        let left = node.left;
        node.left = node.right;
        node.right = left;
        if(node.left !== null) queue.push(node.left);
        if(node.right !== null) queue.push(node.right);
    }
    return pRoot;
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
//let rootM = Mirror(root);
//console.log(rootM);
let rootM2 = Mirror2(root);
console.log(rootM2);