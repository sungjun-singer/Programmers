// 그림 확대
function solution(picture, k) {
    let result = [];
    
    picture.forEach((line) => {
        const temp = [...line].reduce((acc, curr) => acc + curr.repeat(k), '');
        
        for(let i =0; i<k; i++){
            result.push(temp);
        }
    })
    
    return result
}