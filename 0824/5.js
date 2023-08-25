// 다음에 올 숫자
function solution(common) {
    let result = 0;
    if(common[1] - common[0] === common[2] - common[1]) return common[common.length-1] + common[1] - common[0]
    else return common[common.length-1] * (common[1] / common[0]);
}