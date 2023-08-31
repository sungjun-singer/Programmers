// 가까운 수
function solution(array, number) {
    let answer = 0;
    let n = array.length;
    let arr = [];
    let diff = 100;
    for(let i = 0; i<n; i++){
        if(Math.abs(array[i] - number) < diff){
            arr = [];
            arr.push(array[i]);
            diff = Math.abs(array[i] - number)  
        }
        else if(Math.abs(array[i] - number) === diff){
            arr.push(array[i]);
        }
    }
    
    arr.sort(function(a, b){ return a-b})
    
    return arr[0];
}