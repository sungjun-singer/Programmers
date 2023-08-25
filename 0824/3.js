// OX퀴즈
function solution(quiz) {
    return quiz.map(t => {
        const [calc, result] = t.split(" = ");
        const sign = calc.includes('+') ? 1 : -1;
        const [a,b] = calc.split(sign === 1 ? ' + ' : ' - ');
        
        return +a + (sign*(+b)) === +result ? 'O' : 'X';
    })
}