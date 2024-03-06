// 없는 숫자 더하기
function solution(numbers) {
    const arr = [1,2,3,4,5,6,7,8,9];
    let res = 0;
    numbers.forEach((v) => {
        if(arr.includes(v)) res += v;
    })
    
    return 45 - res
}