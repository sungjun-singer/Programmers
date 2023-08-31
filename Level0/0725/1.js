// 간단한 논리 연산
function solution(x1, x2, x3, x4) {
    
    const answer = (x1 | x2) & (x3 | x4);
    if(answer === 1) return true;
    else return false;
    
}