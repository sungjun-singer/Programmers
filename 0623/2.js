// 주사위의 개수
function solution(box, n) {
    var answer = 1;
    
    for(let i = 0; i<box.length; i++){
        answer *= parseInt((box[i]/n));
    }
    
    return answer;
}