// 커피 심부름
function solution(order) {
    const result = order.reduce((prev, cur) => {
        cur = cur.includes("latte") ? 5000 : 4500
        prev += cur
        return prev
    }, 0)
    
    return result;
}