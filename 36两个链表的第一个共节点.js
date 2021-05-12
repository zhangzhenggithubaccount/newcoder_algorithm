function ListNode(x){
    this.val = x;
    this.next = null;
}
//一条链加另一条链
function FindFirstCommonNode1(pHead1, pHead2){
    
    if(!pHead1 || !pHead2) return null;
    let p = pHead1, q = pHead2;

    while(p !== q) {
        p = p? p.next: pHead2;
        q = q? q.next: pHead1;
    }

    return p;

}

let n0 = new ListNode(0);
let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3);
let n4 = new ListNode(4);
let n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n0.next = n3;
n3.next = n4;
n4.next = n5;

let res1 = FindFirstCommonNode1(n0, n1);
console.log(res1);

//为对象添加属性
function FindFirstCommonNode2(pHead1, pHead2){
    
    if(!pHead1 || !pHead2) return null;
    let p = pHead1, q = pHead2;

    while(p) {
        p.tag = true;
        p = p.next;
    }

    while(q) {
        if(q.tag) 
            return q;
        q = q.next;
    }
    return null;
}

let res2 = FindFirstCommonNode2(n0, n1);
console.log(res2);