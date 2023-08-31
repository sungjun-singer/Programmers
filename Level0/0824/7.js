// 연속된 수의 합
function solution(num, total) {
    const res = [];
    let mid = parseInt(total/num);
    res.push(mid);
    if(num % 2 === 1){
        let left = mid;
        let right = mid;
        for(let i = 0; i<parseInt(num/2); i++){
            res.unshift(--left);
            res.push(++right);
        }
    }
    else{
        let left = mid;
        let right = mid;
        for(let i = 0; i<(num/2); i++){
            res.push(++right);
        }
        for(let i = 0; i<(num/2)-1; i++){
            res.unshift(--left);
        }
    }
    
    return res
}