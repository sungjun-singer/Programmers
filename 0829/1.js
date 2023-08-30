// 정사각형으로 만들기
function solution(arr) {
    let width = arr.length;
    let height = arr[0].length;
    if(width >  height){
        for(let j = 0; j<width; j++){
            for(let i = 0; i<width-height; i++){
                arr[j].push(0);
            }
        }
    }
    else if(width < height){
        for(let i = 0; i<height - width; i++){
            arr.push(Array(height).fill(0));
        }
    }
    return arr;
}

const arr = [1,2,5];

let res = arr.some((num) => {
    return num %2 ===0
})

console.log(res);