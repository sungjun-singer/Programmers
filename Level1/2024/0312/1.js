// 스택에 넣는 도중에 위의 4개가 1231이 된다면 result에 1더하고 stack에서 위의 4개 지우기
function solution(ingredient) {
    let result = 0;
    const stack = [];
    
    for(let element of ingredient){
        stack.push(element);
        
        if(stack.slice(-4).join("") === "1231"){
            stack.splice(-4)
            result++;
        }
    }
    return result;
}