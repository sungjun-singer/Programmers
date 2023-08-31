// 숨어있는 숫자의 덧셈 (2)
function solution(my_string) {
    let n = my_string.length;
    
    var answer = 0;
    let str = '';
    for(let i = 0; i<n; i++){
        if(Number(my_string[i]) || my_string[i] === "0") {
            str += my_string[i];
        }
        else{
            answer += Number(str);
            str = '';
        }
    }
    answer += Number(str);
    
    return answer
}