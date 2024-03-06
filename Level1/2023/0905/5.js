// 음양 더하기
function solution(absolutes, signs) {
    let res = 0;
    absolutes.forEach((el, idx) => {
        signs[idx] ? res += el : res -= el;
    })
    return res;
}