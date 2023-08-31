// 특이한 정렬
function solution(numlist, n) {
    const length = numlist.length;
    const arr = numlist.sort((a,b) => a-b);
    let distance = arr.map((v) => {
        return Math.abs(v-n);
    })
    const res = [];
    for(let i = 0; i<length; i++){
        let min = 10000000000;
        let index = 0;
        distance.forEach((num, idx) => {
            if(min >= num){
                min = num;
                index = idx;
            }
        })
        res.push(arr[index]);
        distance.splice(index,1);
        arr.splice(index,1);
    }
    
    return res;
}