// 성격 유형 검사하기
function FPK(obj, partialKey) {
    for (const key in obj) {
      if (key.includes(partialKey)) {
        return key;
      }
    }
    return null;
  }
  
  function solution(survey, choices) {
      const kbti = {
          "RT" : 0,
          "CF" : 0,
          "JM" : 0,
          "AN" : 0,
      }
      
      let answer = '';
      
      for(let i = 0; i<survey.length; i++){
          if(!kbti[survey[i]] && kbti[survey[i]] !== 0){
              let key = FPK(kbti, survey[i][0]);
              switch(choices[i]){
                  case 1 : 
                      kbti[key] += 3;
                      break;
                  case 2 : 
                      kbti[key] += 2;
                      break;
                  case 3 :
                      kbti[key] += 1;
                      break;
                  case 4 :
                      break;
                  case 5 :
                      kbti[key] -= 1;
                      break;
                  case 6 :
                      kbti[key] -= 2;
                      break;
                  case 7 :
                      kbti[key] -= 3;
                      break;
              }
          }
          else{
              switch(choices[i]){
                  case 1 : 
                      kbti[survey[i]] -= 3;
                      break;
                  case 2 : 
                      kbti[survey[i]] -= 2;
                      break;
                  case 3 :
                      kbti[survey[i]] -= 1;
                      break;
                  case 4 :
                      break;
                  case 5 :
                      kbti[survey[i]] += 1;
                      break;
                  case 6 :
                      kbti[survey[i]] += 2;
                      break;
                  case 7 :
                      kbti[survey[i]] += 3;
                      break;
              }
          }
      }
      for(const key in kbti){
          if(kbti[key] <= 0){
              answer += key[0];
          }
          else{
              answer += key[1];
          }
      }
      return answer;
  }