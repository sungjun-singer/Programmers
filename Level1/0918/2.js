// 추억 점수
function solution(name, yearning, photo) {
    let res;
    const temp = [];
    const result = [];
    let myObj = new Object();
    
    for(let i = 0; i<name.length; i++){
        myObj[name[i]] = yearning[i];
    }
    
    
    for(let i = 0; i<photo.length; i++){
        res = 0;
        for(let j = 0; j<photo[i].length; j++){
            if(!myObj[photo[i][j]]){
                res += 0;
            }else{
                res += myObj[photo[i][j]]
            }
        }
        temp.push(res);
    }
    return temp;
}