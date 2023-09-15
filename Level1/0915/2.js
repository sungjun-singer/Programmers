// 푸드 파이트 대회
function solution(food) {
    let str = '';
    for(let i = 1; i<food.length; i++){
        for(let j = 0; j<parseInt(food[i]/2); j++){
            str += i;
        }
    }
    str += 0;
    for(let i = food.length-1; i>=1; i--){
        for(let j = 0; j<parseInt(food[i]/2); j++){
            str += i;
        }
    }
    
    return str
}

