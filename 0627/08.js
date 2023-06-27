// k의 개수
function solution(i, j, k) {
    var answer = 0;
    let arr = []
    for(i; i<=j; i++){
        answer += (i.toString().split(k.toString()).length -1)
    }
    
    return answer;
}