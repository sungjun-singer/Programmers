// 배열에 범위내의 수를 저장해두고
// 2의배수 지우고 3의배수 지우고 5의배수 7의배수 등등 지워주면 소수만 남는다는 정리
// 에라토스테네스의 체
function solution(n) {
    const prime = [];
    const arr = Array(n).fill(0);
    
    for(let i = 2; i<=n; i++){
        arr[i] = i;
    }
    
    for(let i = 2; i<=n; i++){
        if(arr[i] === 0) continue;
        prime.push(i);
        arr[i] = 0;
        
        for(let j = i * 2; j <= n; j += i){
            if(arr[j] === 0) continue;
            arr[j] = 0
        }
    }
    
    return prime.length;
    
}