// 369게임
function solution(order) {
    let count = 0;
    let str = order.toString();
    let arr = str.split("");
    
    for(let i =0; i<arr.length; i++){
        if(Number(arr[i]) % 3 === 0 && Number(arr[i])!==0) count++;
    }
    
    return count;
}