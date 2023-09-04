// 문자열을 정수로 바꾸기
function solution(s) {
    let result = 0;
    if(Number(s[0])) return Number(s)
    else{
        if(s[0] === '+') return parseInt(s.substring(1))
        else return parseInt(s.substring(s))
    }
}