function ListNode(x){
    this.val = x;
    this.next = null;
}
function printListFromTailToHead(head){
    let arr = [];
    while(head) {
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
}

let head = new ListNode(1);
let p = head;
for(let i = 2; i < 5; i++) {
    p.next = new ListNode(i);
    p = p.next;
}

let arr = printListFromTailToHead(head);
console.log(arr);