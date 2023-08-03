// 구슬을 나누는 경우의 수
function solution(balls, share) {
    let result = 1;
    
    for(let i = 1; i<=balls; i++){
        result *= i;
    }
    
    for(let i = 1; i<=share; i++){
        result /= i;
    }
    
    for(let i = 1; i<=(balls-share); i++){
        result /= i;
    }
    
    return Math.round(result);
}