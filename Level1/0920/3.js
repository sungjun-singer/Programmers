// 폰켓몬
function solution(nums) {
    const set = new Set(nums);
    const uniqueArr = [...set];
    
    const length = nums.length/2;
    const u_length = uniqueArr.length;
    
    return length >= u_length ? u_length : length
}