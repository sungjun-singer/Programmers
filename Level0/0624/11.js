// 접미사 배열
function solution(my_string) {
    var answer = [];
    for(let i = my_string.length-1; i>=0; i--){
        let postfix = '';
        for(let j = i; j<my_string.length; j++){
            postfix += my_string[j];
        }
        answer.push(postfix);
    }
    
    answer = answer.sort();
    
    return answer;
}