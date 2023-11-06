// 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
    let result = 0
    let zero = 0;
    const arr = []
    lottos.forEach((v) => {
        win_nums.forEach((l) => {
            if(v === l) result++
        })
        if(v === 0) zero++;
    })
    let worst = 0;
    switch(result){
        case 0 : 
        case 1 : worst = 6; break;
        case 2 : worst = 5; break;
        case 3 : worst = 4; break;
        case 4 : worst = 3; break;
        case 5 : worst = 2; break;
        case 6 : worst = 1; break;
    }
    
    let best = 0;
    switch(result + zero){
        case 0:
        case 1: best = 6; break;
        case 2: best = 5; break;
        case 3: best = 4; break;
        case 4: best = 3; break;
        case 5: best = 2; break;
        case 6: best = 1; break;
    }
    
    return [best,worst]
    
}