// 문자열 내 p와 y의 갯수
function solution(s){
    let pp = 0;
    let yy = 0;
    for(let i=0; i<s.length; i++){
    if(s[i] === 'p' || s[i] === 'P') pp++

    if(s[i] === 'y' || s[i] === 'Y') yy++
    }
    return pp === yy
}