// 코드 처리하기
function solution(code) {
    let ret = '';
    let mode = 0;
    for(let i = 0; i<code.length; i++){
        if(code[i] === "1"){
            mode === 1 ? mode = 0 : mode = 1;
            continue;
        }
        else{
            if(mode === 0){
                if(i % 2 === 0) ret += code[i];
            }
            if(mode === 1){
                if(i % 2 === 1) ret += code[i];
            }
        }
    }
    return ret !== '' ? ret : "EMPTY";
}