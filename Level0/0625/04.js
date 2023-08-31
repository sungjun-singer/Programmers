// 콜라츠 배열 만들기
function solution(n) {
    var answer = [];
    
    do{
        answer.push(n);
        if(n % 2 === 0){
            n /= 2;
        }
        else{
            n = 3*n + 1
        }
    }while(n !== 1)  
    
    answer.push(1);    
    
    return answer;
}