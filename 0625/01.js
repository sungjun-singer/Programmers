// 숫자 찾기
function solution(num, k) {
    
    let str_num = num.toString();
    
    for(let i = 0; i<str_num.length; i++){
        if(Number(str_num[i]) === k) return i+1;
    }
    return -1
}