// 기사단원의 무기
function solution(number, limit, power) {
    let divCount;
    let result = 1;
    for(let i = 2; i<=number; i++){
        divCount = 0;
        for(let j = 1; j<=Math.sqrt(i); j++){
            if(i % j === 0 ){
                if(i / j !== j) divCount+=2;
                else divCount ++;
            }
        }
        divCount > limit ? result += power :  result += divCount;
    }
    
    return result;
}