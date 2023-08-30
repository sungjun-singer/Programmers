// 문자열 여러번 뒤집기
function solution(myString, queries) {
    const arr = queries.flat();
    for(let i = 0; i<arr.length; i+=2){
        let temp = myString.substring(arr[i], arr[i+1]+1);
        let frontStr = myString.substring(0,arr[i]);
        let rearStr = myString.substring(arr[i+1]+1);
        let reverseStr = temp.split("").reverse().join("");
        myString = frontStr + reverseStr + rearStr;
    }
    return myString
}