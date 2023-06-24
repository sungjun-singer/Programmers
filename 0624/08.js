// 간단한 식 계산하기
function solution(binomial) {    
    const arr = binomial.split(" ");
    switch(arr[1]){
        case '+':
            return Number(arr[0]) + Number(arr[2])
        case '-':
            return Number(arr[0]) - Number(arr[2])
        case '*':
            return Number(arr[0]) * Number(arr[2])
    }    
}