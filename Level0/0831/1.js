// 겹치는 선분의 길이
function solution(lines) {
    const arr = new Array(200).fill(0);
    let count = 0;
    lines.forEach((element) => {
        for(let i = element[0]; i<element[1]; i++){
            arr[i+100]++;
        }
    })
    
    arr.forEach((element) => {
        if(element >= 2) count++
    }) 
    
    return count;
}