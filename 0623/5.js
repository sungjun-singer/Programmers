// 부분 문자열 이어 붙여 문자열 만들기
function solution(my_strings, parts) {
    var answer = '';
    
    for(let i = 0; i<my_strings.length; i++){
       for(let j = parts[i][0]; j<=parts[i][1]; j++){
           answer += my_strings[i][j];
       }
    }
    
    return answer;
}