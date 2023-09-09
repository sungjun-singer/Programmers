// 크기가 작은 부분문자열
function solution(t, p) {
    let res = 0;
    for(let i = 0; i<=t.length - p.length; i++){
        let str = '';
        for(let j = i; j<p.length + i; j++){
            str += t[j];
        }
        if(Number(str) <= Number(p)) res++;
    }
    
    return res;
}