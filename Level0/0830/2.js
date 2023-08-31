// 안전지대
function solution(board) {
    const length = board.length
    let result = 0;
    for(let i =0; i<length; i++){
        board[i].push(0);
        board[i].unshift(0);
    }
    board.push(Array(length+2).fill(0));
    board.unshift(Array(length+2).fill(0));
    
    for(let i = 1; i<length+1; i++){
        for(let j = 1; j<length+1; j++){
            if(board[i][j] === 1){
                for(let a = i-1; a<=i+1; a++){
                    for(let b = j-1; b<=j+1; b++){
                        if(board[a][b] !== 1) board[a][b] = 2;
                    }
                }
            }
        }
    }
    
    for(let i = 1; i<length+1; i++){
        for(let j = 1; j<length+1; j++){
            if(board[i][j] === 0) result++
        }
    }
    
    return result;
}
    
