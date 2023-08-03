// 특수문자 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;

rl.on('line', (line) => {
    input = line;
    rl.close();
})

rl.on('close', function () {
    console.log(`!@#$%^&*(\\'"<>?:;`);
});