// 문자열이 몇번 등장하는지 세기
function solution(myString, pat) {
    let count = 0;
    for(let i = 0; i<myString.length-pat.length+1; i++){
        let str = '';
        for(let j = i; j<i+pat.length; j++){
            str += myString[j];
        }
        if(pat === str) count++;
    }
    
    return count
}