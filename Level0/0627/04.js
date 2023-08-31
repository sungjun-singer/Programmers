// 팩토리얼
function solution(n) {
    let answer = 1
    let i = 1;
    while(n >= answer){
        i++;
        answer *= i
    }
    
    return i-1;
}