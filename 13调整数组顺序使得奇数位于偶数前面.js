function reOrderArray1( array ) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - i - 1; j++) {
            if(array[j] % 2 === 0 && array[j + 1] % 2 !== 0) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
let array1 = reOrderArray1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(array1);

function reOrderArray2( array ) {
    let odd = [];
    let even = [];
    array.forEach(function(elem) {
        if(elem % 2 === 0) {
            even.push(elem);
        }else if(elem % 2 !== 0) {
            odd.push(elem);
        }
    });
    return odd.concat(even);
}
let array2 = reOrderArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(array2);