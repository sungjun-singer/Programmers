// 직사각형 넓이 구하기
function solution(dots) {
    let max_x = dots[0][0];
    let min_x = dots[0][0];
    let max_y = dots[0][1];
    let min_y = dots[0][1];
    for(let i = 0; i<dots.length; i++){
        max_x <= dots[i][0] ? max_x = dots[i][0] : min_x = dots[i][0];
        max_y <= dots[i][1] ? max_y = dots[i][1] : min_y = dots[i][1];
    }
    return (max_x - min_x) * (max_y - min_y);
}