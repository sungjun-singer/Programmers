// 실패율
function solution(N, stages) {
    const result = [];
    for(let i = 1; i<=N; i++){
        let reach = stages.filter((x) => i <= x).length;
        let curr = stages.filter((x) => i===x).length;
        
        result.push([i, curr/reach]);
    }
    
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => {
        return x[0];
    })
}