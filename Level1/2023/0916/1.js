// 콜라 문제
function solution(a, b, n) {
    let sum = 0;
    while(parseInt(n/a) !== 0){
        let rest = n%a;
        n = parseInt(n/a)*b;
        sum += n;
        n = n + rest;
    }
    
    return sum
}