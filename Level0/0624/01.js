// 가장 큰수 찾기
function solution(array) {
    var answer = [];
    let max = 0;
    let idx = 0;
    for(let i = 0; i<array.length; i++){
        if(max < array[i]){
            max = array[i];
            idx = i;
        }
    }
    
    answer.push(max);
    answer.push(idx);
    
    return answer;
}