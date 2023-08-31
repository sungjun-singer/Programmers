// 평행
function solution(dots) {
    const first = (dots[0][0] - dots[1][0]) / (dots[0][1] - dots[1][1]) === (dots[2][0] - dots[3][0]) / (dots[2][1] - dots[3][1])
    const second = (dots[0][0] - dots[3][0]) / (dots[0][1] - dots[3][1]) === (dots[1][0] - dots[2][0]) / (dots[1][1] - dots[2][1])
    const third = (dots[0][0] - dots[2][0]) / (dots[0][1] - dots[2][1]) === (dots[1][0] - dots[3][0]) / (dots[1][1] - dots[3][1])
    
    if(first){
        return 1;
    }else if(second){
        return 1;
    }else if(third){
        return 1;
    }
    return 0;
}