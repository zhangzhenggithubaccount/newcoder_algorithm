let inStack = [];
let outStack = [];
function push(node)
{
    inStack.push(node);
}
function pop()
{
    if(outStack.length === 0) {
        while(inStack.length !== 0) {
            outStack.push(inStack.pop());
        }
    }
    return outStack.pop();
}

push(1);
push(2);
push(3);
push(4);
push(5);
console.log(pop());
console.log(pop());
console.log(pop());