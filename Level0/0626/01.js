// 합성수 찾기
function solution(n) {
    let answer = 0;
    
    for(let i = 4; i<=n; i++){
        let count = 0;
        for(let j = 1; j<=n; j++){
            if(i%j===0) count++;
        }
        if(count >= 3) answer++;
    }
    
    return answer;
}