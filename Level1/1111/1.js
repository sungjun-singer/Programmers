// 체육복
function solution(n, lost, reserve) {
    const obj = {};
    let answer = 0;
    for(let i = 1; i<=n; i++){
        obj[i] = 1;
    }

    lost.forEach((v) => {
        obj[v]--;
    })

    reserve.forEach((v) => {
        obj[v]++;
    })


    for(let i = 1; i<=n; i++){
        if(obj[i] === 2 && obj[i-1] === 0){
            obj[i-1]++;
            obj[i]--;
        }
        else if(obj[i] === 2 && obj[i+1] === 0){
            obj[i+1]++;
            obj[i]--;
        }
    }

    for(let key in obj){
        if(obj[key] >= 1) answer++;
    }

    return answer;
}