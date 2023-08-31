// 유한소수 판별하기
function solution(a, b) {
    let i = 1;
    while(i <= a){
        if(a % i === 0 && b %i ===0){
            a /= i;
            b /= i;
        }
        i++;
    }

    while(b !== 1){
        if(b % 2 === 0){
            b /= 2;
        }
        else if(b % 5 === 0){
            b /= 5;
        }
        else{
            return 2;
        }
    }
    
    return 1;
    
}