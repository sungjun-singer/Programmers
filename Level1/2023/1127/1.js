// 둘만의 암호

// 소문자 다음 글자를 숫자로 바꾸어주는 함수
const set_a_to_z = (str)=>{
    return ((str.charCodeAt()+1 - 97) % 26 + 97)
}

function solution(s, skip, index) {
    return s.split('').map(str=>{
        let s = str // s에다가 문자 저장하고
        for(let i=0;i<index;i++){
            // s를 다음 소문자로 만들어주고
            s = String.fromCharCode( set_a_to_z(s) )   
            // skip에 존재하는거라면 i-- 해줘서 더 많이 반복되게 만들어준다.
            skip.indexOf(s) !== -1 && i--
        }
        return s
    }).join('')
}