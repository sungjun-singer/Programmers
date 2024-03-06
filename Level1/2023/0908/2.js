// 문자열 다루기 기본
function solution(s) {
    return (s.length === 4 || s.length === 6) && !isNaN(s) && !s.includes('e') ? true : false
}