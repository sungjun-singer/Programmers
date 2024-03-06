const fibo_recursion = (n) => {
    if(n === 0 || n === 1) return n;
    return fibo_recursion(n -1) + fibo_recursion(n -2);
}

const fibo_literal = (n) => {
    const fiboArr = [];

    for(let i  = 0; i<=n; i++){
        if(i < 2){
            fiboArr.push(i);
        }else{
            fiboArr.push(fiboArr[i-2] + fiboArr[i - 1]);
        }
    }

    return fiboArr.pop();
}


console.log(fibo_recursion(5));
console.log(fibo_literal(5));