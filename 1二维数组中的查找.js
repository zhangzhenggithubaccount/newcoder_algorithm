//1. 暴力破解
function find1(target, array) {

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            if(array[i][j] === target) {
                return true;
            }
        }
    }
    return false;

}

let flag1 = find1(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]);
console.log(flag1);

//2. 利用二维数组由上到下、由左到右递增的规律
//选取左下角或右上角元素与target进行比较
function find2(target, array) {

    let rows = array.length - 1;
    let cols = array[0].length - 1;
    let i = rows;
    let j = 0;
    while(j <= cols && i >= 0) {
        if(array[i][j] < target) {
            j++;
        }else if(array[i][j] > target) {
            i--;
        }else {
            return true;
        }
    }
    return false;

}

let flag2 = find2(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]);
console.log(flag2);

//3. 对每行进行二分查找
function find3(target, array){

    for(let i = 0; i < array.length; i++) {
        let item = array[i];
        let j = 0;
        let k = item.length - 1;
        while(j <= k) {
            let m = Math.floor((j + k)/2);
            if(item[m] < target) {
                j = m + 1;
            }else if(item[m] > target) {
                k = m - 1;
            }else {
                return true;
            }
        }

    }
    return false;

}

let flag3 = find3(5,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]);
console.log(flag3);

//4. ES6 API some()
function find4(target, array){

    return array.some(item => item.some(e=> e === target));

}

let flag4 = find4(5,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]);
console.log(flag4);