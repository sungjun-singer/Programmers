// 무작위로 K개의 수 뽑기
function solution(arr, k) {
    const temp = [];
    for(let element of arr){
        if(!temp.includes(element)){
            temp.push(element);
        }
    }
    const answer = [];
    for(let i = 0; i<k; i++){
        if(i < temp.length){
            answer.push(temp[i]);
        }
        else{
            answer.push(-1);
        }
    }
    
    return answer;
}