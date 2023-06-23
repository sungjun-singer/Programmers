// 덧셈식 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let a = input[0];
    let b = input[1];
    console.log(a + " + " + b + " = " + (Number(input[0]) + Number(input[1])))
});