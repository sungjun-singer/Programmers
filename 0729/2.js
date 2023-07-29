// 소인수 분해
function solution(n) {
    let prime = [];

    for (let i = 2; i <= Math.sqrt(n); i++) { // 2~ n의 제곱근까지 반복해가면서
        while (n % i === 0) { // i로 나눠진다면 계속 반복
            prime.push(i); // 배열에 값 추가하고
            
            n /= i; // n 나눠주고 12가 나왔을때 2, 2 삽입되고 3이 된다면 제곱근은 1.7이 되어서
            // 반복문을 빠져나간다.
        }
    }
    
    if(n >= 2){
        prime.push(n);    
    }
    // n이 제곱근보다 큰 소수라면 그 값 배열에 추가하기.
    
    let ans = Array.from(new Set(prime)); // new Set()을 통해 배열에 중복된 값을 제거할 수 있다.
    
    return ans.sort((a,b) => a - b); // 정렬해서 반환.
}
