// 9로 나눈 나머지
function solution(number) {
    var answer = 0;
    let sum = 0;
    for(let i = 0; i<number.length; i++){
        sum += parseInt(number[i]);
    }
    
    answer = sum%9;
    
    return answer;
}