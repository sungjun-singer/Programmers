// 대소문자 바꿔서 출력하기.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line;
}).on('close',function(){
    const arr = input.split("");
    const result = [];
    for(let alp of arr){
        if(alp.charCodeAt() < 97){
            result.push(String.fromCharCode(alp.charCodeAt()+32))
        }else{
            result.push(String.fromCharCode(alp.charCodeAt()-32))
        }
    }
    
    console.log(result.join(""))
});