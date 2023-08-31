// 배열의 길이를 2의 거듭제곱으로 만들기.
function solution(arr) {
    // 이제 머리를 좀 굴려서 어떻게 간단하게 만들지 생각해보자.
    
    var answer = [];
    for(let element of arr){
        answer.push(element);
    }
    
    function add_zero(square, length){
        for(let i = square-length; i>0; i--){
            answer.push(0);
        }
    }
    if(arr.length <= 1){
        return answer;
    }
    else if(arr.length <=2){
        add_zero(2, arr.length);
    }
    else if(arr.length <=4){
        add_zero(4, arr.length);
    }
    else if(arr.length <=8){
        add_zero(8, arr.length);
    }
    else if(arr.length <=16){
        add_zero(16, arr.length);
    }
    else if(arr.length <=32){
        add_zero(32, arr.length);
    }
    else if(arr.length <=64){
        add_zero(64, arr.length);
    }
    else if(arr.length <=128){
        add_zero(128, arr.length);
    }
    else if(arr.length <=256){
        add_zero(256, arr.length);
    }
    else if(arr.length <=512){
        add_zero(512, arr.length);
    }
    else if(arr.length <=1024){
        add_zero(1024, arr.length);
    }
    
    
    
    return answer;
}