function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2){
    let p = pHead1;
    let q = pHead2;
    let head = new ListNode();
    let h = head;
    while(p && q) {
        if(p.val <= q.val) {
            head.next = p;
            head = head.next;
            p = p.next;
        }else if(p.val > q.val) {
            head.next = q;
            head = head.next;
            q = q.next;
        }
    }
    if(p === null) {
        head.next = q;
    }else if(q === null) {
        head.next = p;
    }
    return h.next;
}

//{0, 2, 4, 6}
let h1 = new ListNode(0);
let p = h1;
for(let i = 2; i < 7; i = i + 2) {
    p.next = new ListNode(i);
    p = p.next;
}
//{1, 3, 5}
let h2 = new ListNode(1);
let q = h2;
for(let i = 3; i < 7; i = i + 2) {
    q.next = new ListNode(i);
    q = q.next;
}
let h3 = Merge(h1, h2);
while(h3) {
    console.log(h3.val);
    h3 = h3.next;
}
