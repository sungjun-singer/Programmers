// 두수의 연산값 비교하기
function solution(a, b) {
    var answer = 0;
    
    let str_a = a.toString();
    let str_b = b.toString();
    
    if(Number(str_a+str_b) >= 2*(a*b)){
        return Number(str_a+str_b)
    }
    else{
        return 2*(a*b)
    }
    
    return answer;
}