function ListNode(x) {
    this.val = x;
    this.next = null;
}
function FindKthToTail( pHead ,  k ) {
    let current = pHead;
    let head = pHead;
    while(pHead) {
        if(k === 0) {
            current = current.next;
        }else {
            k--;
        }
        pHead = pHead.next;
    }
    if(k !== 0) {
        return null;
    }
    return current;
}
//{1, 2, 3, 4, 5}
let head = new ListNode(1);
let p = head;
for(let i = 2; i < 7; i++) {
    p.next = new ListNode(i);
    p = p.next;
}
let current = FindKthToTail( head ,  3);
console.log(current);