// 배열 만들기 2
function solution(l, r) {
    const result = [];
    for(let i = l; i<=r; i++){
        if(!(i.toString().split("5").join("").split("0").join(""))){
            result.push(i);
        }
    }
    return result.length === 0 ? [-1] : result
}

let arr = [1,2,3];

arr.some