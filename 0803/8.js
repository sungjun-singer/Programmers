// 배열 만들기 4
function solution(arr) {
    var stk = [];
    let i = 0;
    while(i < arr.length){
        if(stk.length === 0){
            stk.push(arr[i]);
            i++;
        }
        else{
            if(stk[stk.length-1] < arr[i]){
                stk.push(arr[i]);
                i++;
            }
            else{
                stk.pop();
            }
        }
    }
    
    return stk;
}