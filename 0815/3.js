// 로그인 성공2
function solution(id_pw, db) {
    for(let element of db){
        if(id_pw[0] === element[0]){
            return id_pw[1] === element[1] ? 'login' : 'wrong pw';
        }
    }
    
    return 'fail';
}