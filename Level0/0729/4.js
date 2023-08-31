// 문자열 묶기
function solution(strArr) {
    let lengthArr = [];
    for(let i = 0; i<30; i++){
        lengthArr[i] = 0;
    }
    for(let element of strArr){
        lengthArr[element.length-1]++;
    }
    lengthArr.sort(function(a, b) { return b-a});
    
    return lengthArr[0];
}