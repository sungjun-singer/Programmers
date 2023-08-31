// 문자열 뒤집기
function solution(my_string, s, e) {
    let add_str = my_string.substr(s,e-s+1);
    let reverse_str = add_str.split("").reverse().join("");
    const str1 = my_string.substr(0,s);
    const str2 = my_string.substr(e+1, my_string.length-e);
    return str1 + reverse_str + str2;
}