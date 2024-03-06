// 명예의 전당
function solution(k, score) {
    const honor = [];
    const answer = [];
    
    for(let i = 0; i<score.length; i++){
        if(k > honor.length){
            honor.push(score[i]);
            honor.sort((a,b) => a-b);
        }
        else{
            if(honor[0] < score[i]){
                honor.splice(0,1,score[i]);
                honor.sort((a,b) => a-b);
            }
        }
        answer.push(honor[0]);
    }
    
    return answer;
    
}