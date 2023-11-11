// 대충 만든 자판
function solution(keymap, targets) {
    
    const obj = {};
    const arr = [];
    let temp;
    keymap.forEach((v) => {
        temp = v.split("");
        temp.forEach((c, i) => {
            if(!obj[c] && obj[c] !== 0){
                obj[c] = i+1;
            }
            else {
                if(obj[c] > i) obj[c] = i+1;
            }
        })
    })
    targets.forEach((v) => {
        temp = v.split("");
        let val = 0;
        try{
            temp.forEach((c, i) => {
                if(obj[c] === undefined){
                    val = -1;
                    throw new Error();
                }
                    val += obj[c];    
            })
        }
        catch(err){
            console.log(err);
        }
        arr.push(val);
    })
    return arr;
}