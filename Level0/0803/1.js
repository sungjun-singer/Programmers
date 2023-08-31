// 공 던지기
function solution(numbers, k) {
    let j = 0;
    let result = 0;
    for(let i = 0; i<k; i++){
        result = numbers[(j%numbers.length)]
        j+=2;
    }
    return result;
}

