// 크레인 인형뽑기 게임
function solution(board, moves) {
    let result = 0;
    let stack = [];
    
    for(let move of moves){
        let temp = 0;
        // board[i][move]가 0이 아니라면 스택에 집어넣기
        for(let i = 0; i<board.length; i++){
            if(board[i][move-1] !== 0){
                temp = board[i][move-1];
                board[i][move-1] = 0;
                // 만약 stack의 가장 위의 값이 temp와 같다면 pop하고 result + 2
                if(stack.length > 0 && stack[stack.length-1] === temp){
                    stack.pop();
                    result += 2;
                }else{
                    stack.push(temp);
                }
                break;
            }
        }
    }
    return result;
}