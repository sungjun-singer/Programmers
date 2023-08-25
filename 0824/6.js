// 분수의 덧셈
function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1*denom2 + numer2*denom1;
    let denom = denom1*denom2;
    for(let i = 2; i<=denom; i++){
        if(denom % i === 0 && numer % i ===0){
            denom /= i;
            numer /= i;
            i--;
        }
    }
    
    const res = [numer, denom];
    return res
}