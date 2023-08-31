// 저주의 숫자 3
function solution(n) {
    let result = 0;
    for(let i = 0; i<n; i++){
        result++;
        while(result % 3 === 0 || result.toString().includes("3")){
            result++;
        }
    }
    
    return result
}