// 배열 만들기 6
function solution(arr) {
    let stk = [];
    
    for(let i = 0; i<arr.length; i++){
        if(stk[stk.length-1] === arr[i]){
            stk.pop();
        }
        else{
            stk.push(arr[i]);
        }
    }
    
    if(stk.length === 0){
        stk.push(-1);
    }
    return stk;
}