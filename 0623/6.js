// 최댓값 만들기 (2)
function solution(numbers) {
    var answer = 0;
    
    numbers.sort(function(a,b){
        return a-b;
    });
    
    let minus = numbers[0] * numbers[1];
    let plus = numbers[numbers.length-1] * numbers[numbers.length-2];
    
    if(minus>plus) return minus;
    else return plus;
        
}