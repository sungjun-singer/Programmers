// 숫자 짝꿍
function solution(X, Y) {
    X = X.split("");
    Y = Y.split("");
    let answer = '';
    for(let i = 0; i<10; i++){
        let curX = X.filter((a) => Number(a) === i).length;
        let curY = Y.filter((a) => Number(a) === i).length;
        answer += String(i).repeat(Math.min(curX, curY));
    }
    if(answer === "") return "-1";
    else if(Number(answer) === 0) return "0";
    else {
        return answer.split("").sort((a,b) => b-a).join("");    
    }
    
}