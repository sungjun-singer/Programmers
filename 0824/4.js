// 배열 조각하기
function solution(arr, query) {
    for(let i = 0; i<query.length; i++){
        i%2 === 0 ? arr.splice(query[i]+1) : arr.splice(0, query[i]);
    }
    return arr;
}