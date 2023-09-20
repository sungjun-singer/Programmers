// 과일 장수
function solution(k, m, score) {
    let res = 0;
    const sortedScore = score.slice()
    .sort((a, b) => a - b)
    .slice(score.length % m);
    
    for(let i = 0; i<sortedScore.length; i+=m){
        res += sortedScore[i]*m;
    }
    
    return res;
    
}