// 가장 가까운 같은 글자
function solution(s) { 
    const arr = Array(26).fill(null);
    const res = [];
    
    for(let i = 0; i<s.length; i++){
        let temp = s[i].charCodeAt()-97;
        if(arr[temp] === null){
            arr[temp] = i;
            res.push(-1);
        } 
        else{
            res.push(i-arr[temp])
            arr[temp] = i;
        }
    }
    return res;
}