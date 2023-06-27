// 등차수열의 특정한 항만 더하기
function solution(a, d, included) {
    var answer = 0;
    
    for(let i = 0; i<included.length; i++){
        if(included[i]) included[i] = a + i*d;
    }
    
    for(let i = 0; i<included.length; i++){
        answer += included[i];
    }
    
    return answer;
}