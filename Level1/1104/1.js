// 덧칠하기
function solution(n, m, section) {
    const length = section.length;
    let count = 0;
    let prev = 0;
    for(let i = 0; i<length; i++){
        if(section[i] > prev){
            prev = section[i] + m -1;
            count ++;
        }
    }
    
    return count;
}