function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}
function GetNext(pNode){

    const inOrder = (root) => {
        if(root === null) return null;
        inOrder(root.left);
        vector.push(root);
        inOrder(root.right);
    }
    const vector = [];
    let head = pNode;
    while(head.next !== null) {
        head = head.next;
    }
    inOrder(head);
    for(let i = 0; i < vector.length; i++) {
        if(pNode === vector[i]) {
            return i === (vector.length - 1)? null: vector[i+1];
        }
    }
    return null;
}
let t1 = new TreeLinkNode(1);
let t2 = new TreeLinkNode(2);
let t3 = new TreeLinkNode(3);
let t4 = new TreeLinkNode(4);
let t5 = new TreeLinkNode(5);
let root = new TreeLinkNode(6);
let t7 = new TreeLinkNode(7);
root.left = t2;
root.right = t7;
t7.next = root;
t2.left = t1;
t2.right = t5;
t2.next = root;
t5.left = t3;
t5.next = t2;
t3.right = t4;
t3.next = t5;

let res = GetNext(root);
console.log(res);
