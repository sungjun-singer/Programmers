// 약수의 갯수와 덧셈
function medicinNumberCount(n){
    let count = 0;
    for(let i = 1; i<=n; i++){
        if(n % i === 0) count++;
    }
    return count;
}

function solution(left, right) {
    let res = 0;
    for(let i = left; i<=right; i++){
        if(medicinNumberCount(i) % 2 === 0) res += i;
        else res -= i;
    }
    
    return res;
}

