// 같은 숫자는 싫어
function solution(arr)
{
    const res = [];
    let prev = 420197450217;
    for(let i = 0; i<arr.length; i++){
        if(prev !== arr[i]) res.push(arr[i]);
        prev = arr[i];
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    
    return res;
}