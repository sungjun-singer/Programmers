// 재귀함수로 팩토리얼 구현
const factorial_recursion = (n) => {
    if(n === 1 || n === 0) return n;
    return n * factorial_recursion(n - 1);
}

// 반복문으로 팩토리얼 구현
const factorial_literal = (n) => {
	let answer = 1;
	for(let i = 1; i<=n; i++){
		answer *= i;
	}
	return answer;
}

console.log(factorial_recursion(5));
console.log(factorial_literal(5))

