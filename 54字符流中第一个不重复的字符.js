let map;
function Init(){

    map = {};
}

function Insert(ch){

    if(map[ch]) {
        map[ch]++;
    }else {
        map[ch] = 1;
    }
}

function FirstAppearingOnce(){

    for(let item in map) {
        if(map[item] === 1) {
            return item;
        }
    }
    return '#';

}

Init();
Insert('a');
Insert('p');
Insert('p');
Insert('l');
Insert('e');
Insert('a');

let res = FirstAppearingOnce();
console.log(res);
