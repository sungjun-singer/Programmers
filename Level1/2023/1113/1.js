// [카카오 인턴] 키패드 누르기
const distance = {
    "2" : {
        "1" : 1, "2" : 0, "3" : 1, "4" : 2, "5" : 1, "6" : 2,
        "7" : 3, "8" : 2, "9" : 3, "*" : 4, "0" : 3, "#" : 4,
    },
    "5" : {
        "1" : 2, "2" : 1, "3" : 2, "4" : 1, "5" : 0, "6" : 1,
        "7" : 2, "8" : 1, "9" : 2, "*" : 3, "0" : 2, "#" : 3,
    },
    "8" : {
        "1" : 3, "2" : 2, "3" : 3, "4" : 2, "5" : 1, "6" : 2,
        "7" : 1, "8" : 0, "9" : 1, "*" : 2, "0" : 1, "#" : 2,
    },
    "0" : {
        "1" : 4, "2" : 3, "3" : 4, "4" : 3, "5" : 2, "6" : 3,
        "7" : 2, "8" : 1, "9" : 2, "*" : 1, "0" : 0, "#" : 1,
    },        
}


function solution(numbers, hand) {
let r = "#";
let l = "*"; 
let answer = '';
for(let i = 0; i<numbers.length; i++){
    switch(numbers[i]){
        case 1:
        case 4:
        case 7:
            l = numbers[i];
            answer += "L";
            break;
        case 3:
        case 6:
        case 9:
            r = numbers[i];
            answer += "R";
            break;
        case 2:
        case 5:
        case 8:
        case 0:
            // l까지의 거리를 비교하고, r까지의 거리를 비교해서
            // 더 작은 거리를 출력하고
            // 같다면 hands를 보고 결정한다.
            let r_distance = distance[numbers[i]][r];
            let l_distance = distance[numbers[i]][l];
            if(r_distance < l_distance){
                r = numbers[i];
                answer += "R";
            }
            else if(r_distance > l_distance){
                l = numbers[i];
                answer += "L";
            }
            else {
                if(hand === "right"){
                    r = numbers[i];
                    answer += "R";
                }
                else{
                    l = numbers[i];
                    answer += "L";
                }
            }
    }
}

return answer;

}