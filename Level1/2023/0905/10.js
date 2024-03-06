// 수박수박수박수박수박수박수박수박수?
function solution(n) {
    let res = '';
    for(let i = 1; i<=n; i++){
        i%2 === 1 ? res += "수" : res += "박"; 
    }
    return res;
}