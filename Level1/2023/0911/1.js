// 시저 암호
function solution(s, n) {
    const arr = s.split("");
    const arr1 = [];
    let str = '';
    
    arr.forEach((v) => {
        arr1.push(v.charCodeAt());
    })
    
    arr1.forEach((v) => {
        if(v >= 65 && v <= 90){
            if(v+n > 90) str += String.fromCharCode((64 + (v+n)%90));
            else str += String.fromCharCode(v+n);
        }
        else if(v >= 97 && v <= 122){
            if(v+n > 122) str += String.fromCharCode((96 + (v+n)%122));
            else str += String.fromCharCode(v+n);
        }
        else{
            str += String.fromCharCode(v);
        }
    })
    
    return str;
}