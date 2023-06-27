// 수 조작하기 2
function solution(numLog) {
    let answer = '';
    for(let i = 0; i<numLog.length-1; i++){
        if(Math.abs(numLog[i] - numLog[i+1]) === 1){
            if(numLog[i] < numLog[i+1]) answer += 'w';
            else answer += 's';   
        }
        else{
            if(numLog[i] < numLog[i+1]) answer += 'd';
            else answer += 'a';   
        }
    }
    
    return answer
}