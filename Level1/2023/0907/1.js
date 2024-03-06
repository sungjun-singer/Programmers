// 문자열 내림차순으로 정렬하기
function solution(s) {
    const arr = s.split("");
    arr.sort(function(a,b){
        if(a>b) return -1;
        else if(b>a) return 1;
        else return 0;
    });
    return arr.join("");
}