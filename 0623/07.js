// 문자열 정렬하기 (1)
function solution(my_string) {
    var answer = [];
    
    for(let i = 0; i<my_string.length; i++){
        if(Number(my_string[i]) || my_string[i] === '0'){
            answer.push(Number(my_string[i]));
        }
    }
    
    if(answer.length === 1){
        return answer;
    }
    
    answer.sort(function(a,b){
        return a-b;      
    })
    
    return answer
}