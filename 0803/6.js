// 문자열 계산하기
function solution(my_string) {
    const arr = my_string.split(" ");
    let result = parseInt(arr[0]);
    for(let i = 1; i<arr.length; i+=2){
        if(arr[i] === '+'){
            result += parseInt(arr[i+1]);
        }
        else{
            result -= parseInt(arr[i+1]);
        }
    }
    
    return result
}