// [1차] 다트게임
function solution(dR) {
    let result = 0;
    const arr = [];
    let temp = "";
    for(let i = 0; i<dR.length; i++){
        if(parseInt(dR[i]) || parseInt(dR[i]) === 0){
            temp += dR[i]
        }
        else{
            arr.push(temp);
            arr.push(dR[i]);
            temp = "";
        }
    }
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === "") arr.splice(i,1);
    }
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === "S"){
            arr.splice(i-1, 2, 1*arr[i-1]);
        }
        else if(arr[i] === "D"){
            arr.splice(i-1, 2, arr[i-1]*arr[i-1]);
        }
        else if(arr[i] === "T"){
            arr.splice(i-1,2, arr[i-1] * arr[i-1] * arr[i-1]);
        }
    }
    
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i] === "#") arr.splice(i-1, 2, arr[i-1]*(-1))
    }
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === "*"){
            if(i === 1){
                arr.splice(i,1);
                arr.splice(i-1, 1,arr[i-1]*2);
            }
            else{
                arr.splice(i,1);
                for(let j = i-2; j<i; j++) arr.splice(j,1,arr[j]*2);
            }
        }
    }
    
    for(let i = 0; i<arr.length; i++) result += arr[i];
    return result
}