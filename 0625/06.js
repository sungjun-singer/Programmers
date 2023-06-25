// 문자열 정렬하기 (2)
function solution(my_string) {
    var answer = '';
    
    answer = my_string.toLowerCase();
    
    answer = answer.split("");
    answer.sort();
    
    let answer1 = ''
    for(let i = 0; i<answer.length; i++){
        answer1 += answer[i];
    }
    
    return answer1;
}