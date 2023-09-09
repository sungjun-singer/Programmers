// 최대공약수와 최소공배수
function solution(n, m) {
    let i = 1;
    let max = 1;
    while(i <= m){
        if(n % i === 0 && m % i ===0){
            max = i;
        }
        i++;
    }
    return [max, n*m/max];
}