// 세 개의 구분자
function solution(myStr) {
    let one = myStr.split("a");
    
    let temp = [];
    for(let p of one){
        temp.push(p.split("b"));
    }
    
    let two = temp.flat();
    temp = [];
    for(let p of two){
        temp.push(p.split("c"));
    }
    temp = temp.flat()
    
    for(let i = 0; i<temp.length; i++){
        if(temp[i] === ""){
            temp.splice(i,1);
            i--;
        }
    }
    return temp.length !== 0 ? temp : ["EMPTY"];
}