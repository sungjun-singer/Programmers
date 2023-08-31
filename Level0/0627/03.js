// 배열 만들기 5
function solution(intStrs, k, s, l) {
   
    let answer = [];
    
    for(let i = 0; i<intStrs.length; i++){
        let str = intStrs[i].substring(s, s+l);
        if(Number(str) > k) answer.push(Number(str));
    }
    
    return answer;
}