// 7의 개수
function solution(array) {
    var answer = 0;
    
    let sev_arr = array.toString().split("");
    
    for(let element of sev_arr){
        if(element === "7"){
            answer++;
        }
    }
    
    return answer
}