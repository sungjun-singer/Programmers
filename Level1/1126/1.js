/*
문제이해 : 첫글자 x를 읽는다. x인 글자와 x가 아닌 글자들이 나온 횟수를 센다.
두 횟수가 같아지는 순간 멈추고 지금까지 읽은 문자열을 분리한다.
두 횟수가 다른 상태에서 더이상 읽을 문자가 없다면 지금까지 읽은거 반환한다.

1. 아이디어
- for문을 사용해서 읽어가면서 횟수가 같아질 경우 0~i까지 분리하고 cnt + 1을 해준다
- 만약에 같아진다면 분리하고 분리한거 가지고 다시 재귀함수 돈다.

2. 시간복잡도
- s.length만큼 걸림

3. 자료구조
- 분리된 문자열의 수를 저장할 cnt
- 첫 문자를 저장할 변수 x
- x의 횟수와 x아닌 거의 횟수를 저장할 a, b 변수
*/

let cnt = 0;

function recur(s) {
    let x = s[0];
    let a = 1;
    let b = 0;
    for(let i = 1; i<s.length; i++){
        s[i] === x ? a++ : b++
        if(a === b) {
            cnt++;
            s = s.substr(i+1);
            console.log(s);
            recur(s);
            break;
        }   
    }    
}

function solution(s) {
    recur(s);
    return s.length === 0 ? cnt : cnt+1;
}

console.log(solution("abaabab"));

