// 정수 제곱근 판별
function solution(n) {
    return (Math.sqrt(n) + "").includes(".") ? -1 : (Math.sqrt(n)+1)*(Math.sqrt(n)+1);
}