// 바탕화면 정리
function solution(wallpaper) {
    let x = [];
    let y = [];
    const res = [];
    wallpaper.forEach((v, i) => {
        let haveFile = false;
        for(let i = 0; i<v.length; i++){
            if(v[i] === "#"){
                x.push(i);
                haveFile = true;
            }
        }
        if(haveFile) y.push(i);
    })
    
    let minX = Math.min(...x);
    let minY = Math.min(...y) 
    let maxX = Math.max(...x) + 1;
    let maxY = Math.max(...y) + 1;
    
    res.push(minY, minX, maxY, maxX)
    return res;

} 