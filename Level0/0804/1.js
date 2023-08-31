// 왼쪽 오른쪽
function solution(str_list) {
    let i = 0;
    while(i<str_list.length){
        if(str_list[i] === 'l'){
            return str_list.slice(0, i);
        }
        else if(str_list[i] === 'r'){
            return str_list.slice(i+1, str_list.length);
        }
        i++;
    }
    
    return [];
}