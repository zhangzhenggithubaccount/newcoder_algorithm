function jumpFloor(number)
{
    if(number < 3) {
        return number;
    }
    let a = 1;
    let b = 2;
    for(let i = 2; i < number; i++) {
        b = a + b;
        a = b - a;
    }
    return b;

}
let b = jumpFloor(5);
console.log(b);