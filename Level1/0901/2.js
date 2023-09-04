// 나머지가 1이 되는 수 찾기
function solution(n) {
    let i = 2;
    while(n % i !== 1){
        i++;
    }
    return i
}