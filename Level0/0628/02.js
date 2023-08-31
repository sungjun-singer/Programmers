// 이차원 배열 대각선 순회하기
function solution(board, k) {
    var answer = 0;
    
    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[i].length; j++){
            if(i+j <= k) answer += board[i][j];
        }
    }
    
    return answer
}