// 세로 읽기
function solution(my_string, m, c) {
    var answer = '';
    let arr = []
    let n = my_string.length;
    for(let i = 0; i<n; i+=m){
        let str = '';
        for(let j = i; j<i+m; j++){
            str += my_string[j];
        }
        arr.push(str);
    }
    
    for(let i = 0; i<arr.length; i++){
        answer += arr[i][c-1];
    }
    
    return answer;
}