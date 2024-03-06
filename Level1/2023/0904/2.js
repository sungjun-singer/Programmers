// 하샤드 수
function solution(x) {
    let arr = ("" + x).split("")
    let result = 0;
    arr.forEach((num) => {
        result += parseInt(num);
    })
    
    return x%result === 0 ? true : false;
}