// 소수 만들기
function isPrime(num) {
  
    if(num === 2) {
      return true;
    }
    
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0){
        return false; 
      }
    }
    return true; 
  }
  
  function solution(nums) {
      let result = 0;
      let count = 0;
      let arr = [];
      const length = nums.length;
      for(let a = 0; a<length-2; a++){
          for(let b = a+1; b<length-1; b++){
              for(let c = b+1; c<length; c++){
                  if(isPrime(nums[a] + nums[b] + nums[c])) result++;
              }
          }
      }
      
      return result;
  }
      
  