// [1차] 비밀지도
function solution(n, arr1, arr2) {
    const res = [];
    const res1 = []
    for(let i = 0; i<n; i++){
        res.push((arr1[i] | arr2[i]).toString(2).padStart(n,0));
    }
    
    for(let i = 0; i<n; i++){
        let temp = res[i].replaceAll("1","#");
        temp = temp.replaceAll("0"," ");
        res1.push(temp);
    }
    
    return res1;
}