// 진료 순서 정하기
function solution(emergency) {
    let answer = [];
    let n = emergency.length;
    let temp = [];
    for(let i = 0; i<n; i++){
        temp.push(emergency[i]);
    }
    temp.sort(function(a,b){return b-a});    
    
    for(let i = 0; i<n; i++){
        let change = emergency[i]
        for(let j = 0; j<=n; j++){
            if(temp[j] === change) answer.push(j+1);
        }
    }
    
    return answer;
}