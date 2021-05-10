function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function print(root) {
    let ret = [];
    while(root) {
        if(root.random){
            ret.push([root.label, root.random.label]);
        }else {
            ret.push([root.label, null]);
        }
        root = root.next;
    }
    console.log(ret);
}
function Clone(pHead) {
    if(!pHead) return null;
    let cur = pHead;
    while(cur) {
        let node = new RandomListNode(cur.label);
        node.next = cur.next;
        cur.next = node;
        cur = cur.next.next;
    }

    cur = pHead;
    while(cur) {
        if(cur.random) 
            cur.next.random = cur.random.next;
        cur = cur.next.next;
    }

    cur = pHead;
    let newNode = pHead.next;
    let clone = null;
    while(cur) {
        clone = cur.next;
        cur.next = clone.next;
        clone.next = (clone.next === null? null: clone.next.next);
        cur = cur.next;
    }
    return newNode;
}
let p1 = new RandomListNode(1);
let p2 = new RandomListNode(2);
let p3 = new RandomListNode(3);
let root = new RandomListNode(0);
root.next = p1;
root.random = root;
p1.next = p2;
p1.random = root;
p2.next = p3;
p3.random = root;

let res = Clone2(root);
print(root)
print(res)

console.log(root.random == res.random);

function Clone2(pHead) {
    if(!pHead){
        return null;
    }
    var head = new RandomListNode(pHead.label);
    head.random = pHead.random;
    head.next = Clone(pHead.next);
    return head;
}