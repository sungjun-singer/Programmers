// 최소직사각형
function solution(sizes) {
    let max = 0;
    const arr = [];
    for(let i = 0; i<sizes.length; i++){
        if(sizes[i][0] > max) max = sizes[i][0];
        if(sizes[i][1] > max) max = sizes[i][1];
        if(sizes[i][0] >= sizes[i][1]) arr.push(sizes[i][1])
        else arr.push(sizes[i][0])
    }
    
    const height = Math.max(...arr);
    
    return max*height;
}