function ListNode(x){
    this.val = x;
    this.next = null;
}
function deleteDuplication(pHead){

    let h = new ListNode();
    h.next = pHead;
    let pre = h, cur = h;
    while(cur) {
        if(cur.next && cur.val === cur.next.val) {
            cur = cur.next;
            while(cur.next && cur.val === cur.next.val)
                cur = cur.next;
            cur = cur.next;
            pre.next = cur;
        }else {
            pre = cur;
            cur = cur.next;
        }
    }
    return h.next;
}

let root = new ListNode(1);
let p2 = new ListNode(2);
let p3 = new ListNode(2);
let p4 = new ListNode(2);
let p5 = new ListNode(3);
let p6 = new ListNode(3);
let p7 = new ListNode(4);

root.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;
p5.next = p6;
p6.next = p7;

let res = deleteDuplication(root)
while(res) {
    console.log(res.val);
    res = res.next;
}

