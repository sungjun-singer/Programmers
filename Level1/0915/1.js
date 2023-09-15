// 두개 뽑아서 더하기
function solution(numbers) {
    const res = [];
    let length = numbers.length;
    for(let i = 0; i<length-1; i++){
        for(let j = i+1; j<length; j++){
            res.push(numbers[i] +numbers[j]);
        }
    }
    const set = new Set(res);
    const result = [...set].sort((a,b) => a-b);
    return result
}