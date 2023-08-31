// 치킨 쿠폰
function solution(chicken) {
    let result = 0;

    while(chicken > 9){
        result += parseInt(chicken/10);
        chicken = parseInt(chicken/10) + chicken%10;
    }

    return result
}