// 중복된 문자 제거
function solution(my_string) {
    var answer = '';
    
    let arr = my_string.split("");
    
    for(let i = 0; i<arr.length; i++){
        if(!answer.includes(arr[i])){
            answer += arr[i];
        }
    }
    
    return answer;
}