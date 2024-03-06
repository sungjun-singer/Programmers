// 가운데 글자 가져오기
function solution(s) {
    const length = s.length;
    return length % 2 === 0 ? s.substr(length/2-1, 2) : s.substr(length/2,1);
}