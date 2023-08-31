// 2차원으로 만들기
function solution(num_list, n) {
    var answer = [];
    for(let i = 0; i<num_list.length/n; i++){
        let arr = [];
        for(let j = i*n; j<n*(i+1); j++){
            arr.push(num_list[j]);
        }
        answer.push(arr);
    }
    
    return answer;
}