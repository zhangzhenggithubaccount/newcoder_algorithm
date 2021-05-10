function ListNode(x) {
    this.val = x;
    this.next = null;
}

function ReverseList(pHead) {

    let prev = null;
    while(pHead) {
        let curr = pHead;
        pHead = pHead.next;
        curr.next = prev;
        prev = curr;
    }
    return prev;
    
}

let head = new ListNode(1);
let p = head;
for(let i = 2; i < 5; i++) {
    p.next = new ListNode(i);
    p = p.next;
}
let current = ReverseList(head);
console.log(current);