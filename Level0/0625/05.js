// 가까운 1찾기
function solution(arr, idx) {
    var answer = -1;
    
    for(let i = idx; i<arr.length; i++){
        if(arr[i] === 1){
            answer = i;
            break;
        }
    }
    
    return answer;
}