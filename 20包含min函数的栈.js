let stack = [];
let minStack = [];
function push(node) {
    stack.push(node);
    minStack.push(node);
    minStack.sort(function(a, b) {
        return a - b;
    });
}
function pop() {
    let del = stack.pop();
    let idx = minStack.indexOf(del);
    minStack.splice(idx, 1);
    return del;
}
function top() {
    return stack[0];
}
function min() {
    return minStack[0];
}

push(5);
push(10);
push(2);
push(6);
push(4);
console.log(min());
console.log(top());