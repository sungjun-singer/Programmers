// 수열과 구간 쿼리 2
function solution(arr, queries) {
    const res = [];
    for(let i = 0; i<queries.length; i++){
        let result = [];
        for(let j = queries[i][0]; j<=queries[i][1]; j++){
            if(arr[j] > queries[i][2]){
                result.push(arr[j]);
            }
        }
        result.sort((a,b) => a-b);
        res.push(result.length !== 0 ? result[0] : -1);
    }
    
    return res
}