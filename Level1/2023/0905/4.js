// 나누어 떨어지는 숫자배열
function solution(arr, divisor) {
    const res = arr.filter((v) => v%divisor === 0);
    return res.length ? res.sort((a,b) => a-b) : [-1]
}