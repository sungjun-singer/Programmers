// 삼각형의 완성 조건 (2)
function solution(sides) {
    sides.sort((a,b) => a -b);
    
    let count = 0;
    for(let i = sides[1] -sides[0]+1; i<sides[0] + sides[1]; i++){
        count++;
    }
    
    return count;
    
}