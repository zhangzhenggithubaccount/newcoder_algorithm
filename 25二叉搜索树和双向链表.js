function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
//递归思想
function Convert(pRootOfTree){
    let lastNode = null;
    let head = null;
    const dfs = (root) => {
        if(!root) return null;
        dfs(root.left);
        
        if(lastNode) {
            lastNode.right = root;
            root.left = lastNode;
            lastNode = root;
        }else {
            lastNode = root;
            head = lastNode;
        }
    
        dfs(root.right);
    }
    dfs(pRootOfTree);
    return head;
}

function print(root) {
    let res = []
    while(root) {
        res.push(root.val)
        root = root.right;
    }
    console.log(res);
}
//栈思想
function Convert2(pRootOfTree){
    let nodes = [];
    const dfs = (root) => {
        if(!root) return;
        dfs(root.left);
        nodes.push(root);
        dfs(root.right);
    }
    dfs(pRootOfTree);
    let head = nodes[0];
    let realHead = head;
    for(let i = 1; i < nodes.length; i++) {
        head.right = nodes[i];
        nodes[i].left = head;
        head = nodes[i];
    }
    return realHead;
}

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(12);
let p = root.left;
p.left = new TreeNode(4);
p.right = new TreeNode(7);

let res = Convert2(root);
console.log(res);
print(res);
