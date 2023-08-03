// 2의 영역
function solution(arr) {
    const newArr = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === 2){
            newArr.push(i);
        }
    }
    
    const result = [];
    if(newArr.length === 0){
        result.push(-1);
    }
    else{
        for(let i = newArr[0]; i<=newArr[newArr.length - 1]; i++){
            result.push(arr[i]);
        } 
    }
    
    return result;
}