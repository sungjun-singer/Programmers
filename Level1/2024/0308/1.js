function solution(id_list, report, k) {
    // 결과 배열 생성
    const answer = new Array(id_list.length);
    answer.fill(0);
    // 신고 객체 생성
    const report_list = {};
    
    // 신고객체 아이디별로 배열 만들기
    id_list.map((user) => {
        report_list[user] = [];
    })
    
    // report_list에 report_user의 배열에 user_id가 없으면 새로운 신고이기 때문에 배열에 추가
    report.map((user) => {
        const [user_id, report_id] = user.split(" ");
        if(!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id);
        }
    })
    
    // 객체 돌면서 길이가 k이상인거 찾아서 그 안에 있는 신고자의 배열에 +1하기
    for(const key in report_list){
        if(report_list[key].length >= k){
            report_list[key].map((user) => {
                answer[id_list.indexOf(user)]++;
            })
        }
    }
    
    return answer;
    
    
}