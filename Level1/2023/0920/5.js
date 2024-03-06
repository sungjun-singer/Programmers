// 모의고사
function solution(answers) {
    const res = [];
    const oneA = [1,2,3,4,5];
    const twoA = [2,1,2,3,2,4,2,5];
    const threeA = [3,3,1,1,2,2,4,4,5,5];
    
    let one = 0;
    let two = 0;
    let three = 0;
    
    answers.forEach((v,i) => {
        if(v === oneA[i % 5]) one++;
        if(v === twoA[i % 8]) two++;
        if(v === threeA[i % 10]) three++;
    })
    
    const arr = [one, two, three];
    let max = 0;
    for(let i = 0; i<arr.length; i++){
        if(max < arr[i]) max = arr[i];
    }
    
    for(let i = 0; i<arr.length; i++){
        if(max === arr[i]) res.push(i+1);
    }
    
    return res
}