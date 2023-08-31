// 한번만 등장한 문자
function solution(s) {
    var answer = '';
    
    const str_table = {
        'a' : 0,
        'b' : 0,
        'c' : 0,
        'd' : 0,
        'e' : 0,
        'f' : 0,
        'g' : 0,
        'h' : 0,
        'i' : 0,
        'j' : 0,
        'k' : 0,
        'l' : 0,
        'm' : 0,
        'n' : 0,
        'o' : 0,
        'p' : 0,
        'q' : 0,
        'r' : 0,
        's' : 0,
        't' : 0,
        'u' : 0,
        'v' : 0,
        'w' : 0,
        'x' : 0,
        'y' : 0,
        'z' : 0
    }
    let arr = s.split("");
    for(let i of arr){
        str_table[i]++;
    }
    for(let i = 97; i<123; i++){
        if(str_table[String.fromCharCode(i)] === 1){
            answer += String.fromCharCode(i);
        }
    }
    return answer;
}