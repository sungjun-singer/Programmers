// 등수 매기기
function solution(score) {
    let result = [];
    let rank = [];
    let arr = [];
    for(let element of score){
        arr.push(element[0]+ element[1]);
        rank.push(element[0]+ element[1]);
    }
    
    rank.sort((a,b) => b-a);
    
    for(let i = 0; i<arr.length; i++){
        result.push(rank.indexOf(arr[i])+1);
    }
    
    
    return result;
}