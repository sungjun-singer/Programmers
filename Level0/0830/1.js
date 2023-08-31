// 다항식 더하기
function solution(a) {
    let result = [0, 0];
    const arr = a.split(" + ");
    arr.forEach((element) => {
        if(element === 'x') result[0]++;
        else if(element.includes('x')) result[0] += Number(element.split("x")[0])
        else result[1] += Number(element);
    })
    
    if(result[0] === 1){
        if(result[1] === 0) return 'x';
        else return 'x + ' + result[1]; 
    }
    
    if(result[0] === 0){
        return result[1].toString()
    }else if(result[1] === 0){
        return result[0] + 'x';
    }else{
        return result[0] + "x + " + result[1];
    }
}