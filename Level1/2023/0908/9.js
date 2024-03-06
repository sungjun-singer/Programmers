// 예산
function solution(d, budget) {
    d.sort((a,b) => a-b);
    let i = 0;
    let sum = 0;
    while(sum <= budget){
        sum += d[i];
        i++
    }
    return i-1;
}