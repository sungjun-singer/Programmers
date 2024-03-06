// 카드 뭉치
function solution(cards1, cards2, goal) {
    let first = 0;
    let second = 0;
    let res = "Yes";
    
    goal.forEach((v) => {
        if(v === cards1[first]){
            first++;
        }
        else if(v === cards2[second]){
            second++;
        }
        else {
            res = "No";
        }
    })
    
    return res;
}