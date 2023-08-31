// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
function solution(myString, pat) {
    let i = myString.lastIndexOf(pat);
    
    let answer = myString.substring(0, i + pat.length);
    return answer
}