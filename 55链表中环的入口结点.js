function ListNode(x){
    this.val = x;
    this.next = null;
}
function EntryNodeOfLoop(pHead){

    if(!pHead) return null;
    let h = pHead;
    while(h) {
        if(h.flag) {
            return h;
        }
        h.flag = true;
        h = h.next;
    }
    return null;
    
}

let root = new ListNode(1);
let p2 = new ListNode(2);
let p3 = new ListNode(3);
let p4 = new ListNode(4);
let p5 = new ListNode(5);
let p6 = new ListNode(6);
let p7 = new ListNode(7);

root.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;
p5.next = p6;
p6.next = p7;
p7.next = p3;

let res = EntryNodeOfLoop(root);
console.log(res);