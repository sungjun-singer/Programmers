// 전국대회 선발고사
function solution(true_rank, attendance) {
    const idx = [];
    const result = [];
    for(let i = 0; i<attendance.length; i++){
        if(attendance[i]){
            idx.push(i);
        }
    }
    const rank = [];
    for(let i = 0; i<idx.length; i++){
        rank.push(true_rank[idx[i]]);
    }
    
    for(let i = 0; i<3; i++){
        let min = rank[0];
        let min_idx = 0;
        for(let j = 1; j<rank.length; j++){
            if(min > rank[j]){
                min = rank[j]
                min_idx = j;
            }
        }
        result.push(idx[min_idx]);
        rank.splice(min_idx,1);
        idx.splice(min_idx,1);
    }
    
    return result[0]*10000 + result[1] * 100 + result[2];
}