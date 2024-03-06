// 2016년
function solution(a, b) {
    let day = -1;
    switch(a){
        case 2 : day += 31; break;
        case 3 : day += 60; break;
        case 4 : day += 91; break;
        case 5 : day += 121; break;
        case 6 : day += 152; break;
        case 7 : day += 182; break;
        case 8 : day += 213; break;
        case 9 : day += 244; break;
        case 10 : day += 274; break;
        case 11 : day += 305; break;
        case 12 : day += 335; break;
    }
    day += b;
    switch(day % 7){
        case 0 : return "FRI";
        case 1 : return "SAT";
        case 2 : return "SUN";
        case 3 : return "MON";
        case 4 : return "TUE";
        case 5 : return "WED";
        case 6 : return "THU";
    }
    
}