function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function FindPath(root, expectNumber){
    let path = [];
    let ret = [];
    if(!root) return ret;
    dfs(root, expectNumber, path, ret);
    return ret;
}
function dfs(root, sum, path, ret) {
    path.push(root.val);
    if(sum == root.val && !root.left && !root.right) {
        ret.push(path.slice());
    }
    if(root.left) dfs(root.left, sum - root.val, path, ret);
    if(root.right) dfs(root.right, sum - root.val, path, ret);
    path.pop();
}
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(12);
let p = root.left;
p.left = new TreeNode(4);
p.right = new TreeNode(7);

let ret = FindPath(root, 22);
console.log(ret);
