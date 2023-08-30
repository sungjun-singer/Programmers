// 외계어 사전
function solution(spell, dic) {
    const res = [];
    dic.forEach((word, idx) => {
        let temp = true;
        for(let i = 0; i<spell.length; i++){
            if(!word.includes(spell[i])){
                temp = false;
            }
        }
        if(temp) res.push(word);
    })
    
    let result = res.some((element) => {
        return element.length === spell.length;
    })
    return result ? 1 : 2;
}