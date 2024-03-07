function solution(new_id) {
    // 1. 대문자를 소문자로 치환
    new_id = new_id.toLowerCase();
    
    // 2. 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거
    new_id = new_id.replace(/[^a-z0-9-_.]/g, '')
    
    // 3. 마침표 2번이상 연속된 부분 하나로 치환하기
    new_id = new_id.replace(/\.{2,}/g, '.');
    
    // 4. 처음이나 끝에 존재한다면 제거하기
    if(new_id[0] === '.') new_id = new_id.slice(1);
    if(new_id[new_id.length -1] === '.') new_id = new_id.slice(0, new_id.length-1);
    
    // 5. 빈문자열이라면 new_id에 a를 대입하기
    if(new_id === "") new_id = "a";
    
    // 6. 길이가 16자 이상이면 15~끝까지 자르기 15번째문자가 .이면 이것도 제거하기
    if(new_id.length >= 16){
        new_id = new_id.slice(0,15)
    }
    if(new_id[new_id.length-1] === '.') new_id = new_id.slice(0, new_id.length-1);
    
    // 7. 길이가 2자 이하라면 new_id의 마지막 문자를 new_id의 길이가 3이 될때까지 이어붙이기
    const addStr = new_id[new_id.length -1]
    while(new_id.length < 3){
       new_id += addStr         
    }
    
    return new_id;
}