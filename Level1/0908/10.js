// 삼총사
function solution(number) {
    let res = 0;
    const length = number.length;
    for(let a = 0; a<length-2; a++){
        for(let b = a+1; b<length-1; b++){
            for(let c = b+1; c<length; c++){
                if(number[a] + number[b] + number[c] === 0) res++;
            }
        }
    }
    
    return res
}