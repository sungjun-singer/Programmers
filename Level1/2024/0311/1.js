function solution(b) {
    let result = 0;
    // 가능한 단어 배열로 선언
    const arr = ["aya", "woo", "ye", "ma"];
    
    // 단어 하나씩 반복문 돌리기
    for(let word of b){
        // 반복문 i 선언
        let i = 0;
        // 이전 사용한 옹알이 위치 저장
        let prev = -1;
        
        // 단어 길이 반복
        while(i < word.length){
            // 단어가 aya일 경우 진행
            if(word.substr(i,3) === arr[0]){
                // 이전단어가 aya일 경우 반복문 탈출
                if(prev === 0){
                    i += 99999999;
                }else{
                    // 이전단어 aya라고 저장
                    prev = 0;
                    i += 3;
                }
            }
            // 단어가 woo일 경우 진행
            else if(word.substr(i,3) === arr[1]){
                if(prev === 1){
                    i += 99999999;
                }else{
                    prev = 1;
                    i +=3;
                }
            }
            // 단어가 ye일 경우 진행
            else if(word.substr(i,2) === arr[2]){
                if(prev === 2){
                    i += 99999999;
                }else{
                    prev = 2;
                    i +=2;
                }
            }
            // 단어가 ma일 경우 진행
            else if(word.substr(i,2) === arr[3]){
                if(prev === 3){
                    i += 99999999;                
                }else{
                    prev = 3;
                    i +=2;
                }
            }
            // 단어가 아무것도 아닐경우 진행
            else{
                i += 99999999;
            }
        }
        if(i < 99999999) result++;
    }
    
    return result;
}