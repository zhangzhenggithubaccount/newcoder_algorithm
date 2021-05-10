function printMatrix(matrix){
    let lr = 0, lc = 0;
    let rr = matrix.length - 1, rc = matrix[0].length - 1;
    let arr = [];
    while(lr <= rr && lc <= rc) {
        circle(matrix, lr++, lc++, rr--, rc--, arr);
    }
    return arr;
}

function circle(matrix, lr, lc, rr, rc, arr) {
    for(let cols = lc; cols <= rc; cols++) arr.push(matrix[lr][cols]);
    for(let rows = lr+1; rows <= rr; rows++) arr.push(matrix[rows][rc]);
    if((rr - lr + 1) > 1){
        for(let cols = rc-1; cols >= lc; cols--) arr.push(matrix[rr][cols]);
    }
    if(((rc - lc + 1) > 1)) {
        for(let rows = rr-1; rows >= lr + 1; rows--) arr.push(matrix[rows][lc]);
    }
}
let matrix1 = [[1, 2, 3, 4, 5],
              [18, 19, 20, 21, 6],
              [17, 28, 29, 22, 7],
              [16, 27, 30, 23, 8],
              [15, 26, 25, 24, 9],
              [14, 13, 12, 11, 10]];
let arr1 = printMatrix(matrix1);
console.log(arr1);
let matrix2 = [[1, 2, 3, 4, 5],
              [14, 15, 16, 17, 6],
              [13, 20, 19, 18, 7],
              [12, 11, 10, 9, 8]];
let arr2 = printMatrix(matrix2);
console.log(arr2);
let matrix3 = [[1],
              [2],
              [3],
              [4],
              [5],
              [6]];
let arr3 = printMatrix(matrix3);
console.log(arr3);
let matrix4 = [[1,2],
               [3,4],
               [5,6],
               [7,8],
               [9,10]]
let arr4 = printMatrix(matrix4);
console.log(arr4);

function printMatrix2(matrix)
{
    if(!matrix) return [];
    const result = [];
    let left = 0, right = matrix[0].length-1, top = 0,bottom = matrix.length-1;
    while(left <= right && top <= bottom) {
        for(let i = left;i<=right;i++) {
            result.push(matrix[top][i])
        }
        top++;
        for(let i = top; i<= bottom;i++) {
            result.push(matrix[i][right])
        }
        right--;
        if(left>right || top > bottom){
            break;
        }
       for(let i = right; i>= left;i--) {
            result.push(matrix[bottom][i])
        }
        bottom--;
        for(let i = bottom; i>= top;i--) {
            result.push(matrix[i][left])
        }
        left++;
    }
    return result
}