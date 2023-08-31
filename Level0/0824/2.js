// 문자열 밀기
function solution(A, B) {
    if(A === B) return 0;
    let ans = -1;
    const arr = A.split("");
    for(let i = 0; i<A.length; i++){
        let temp = arr.pop();
        arr.unshift(temp);
        if(arr.join("") === B) return i+1;
    }
    return ans;
}