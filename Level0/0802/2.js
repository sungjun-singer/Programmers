// 조건에 맞게 수열 변환하기 2
function solution(arr) {
    let flag = true;
    let count = 0;
    while(flag){
        count++;
        flag = false;
        for(let i = 0; i< arr.length; i++){
            if((arr[i] % 2 === 0) && (arr[i] >= 50)){
                flag = true;
                arr[i] = arr[i] / 2;
            }
            else if((arr[i] % 2 === 1) && (arr[i] < 50)){
                flag = true;
                arr[i] = arr[i]*2 + 1;
            }
        }
    }
    
    return count-1;
}