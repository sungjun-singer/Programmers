// function solution(array, n) {
//     let arr = array.sort(function(a,b){return a-b});
//     let least = 100;
//     let idx = 0;
//     let count = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(Math.abs(arr[i] - n) < least){
//             count = 0;
//             least = Math.abs(arr[i] -n);
//             idx = i;
//         }
//         else if(Math.abs(arr[i] - n) === least) count++;
//         else{
//             return arr[idx];
//         }
//     }
//     return arr[idx-count]; 
// }

// let arr1 = [3, 14 ,15, 12, 37, 25, 49, 51, 58, 67, 84, 42, 99, 15, 15, 15, 15, 16];
// console.log(solution(arr1, 15));

if(!null){
    console.log("실행되나?");
}