// 직각삼각형 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let str = '';
    for(let i = 0; i< Number(input); i++){
        str += '*';
        console.log(str);
    }
});