// const myRe = new RegExp("d(b+)d", "g");
// const myArray = myRe.exec("cdbbdbsbz");

// console.log(myRe.lastIndex);
// console.log(myArray[0]);

// console.log(myArray.index);

// const arr = [
//     1,
//     2,
// ]

// arr.index = 1;
// arr.input = "abcde";
// arr.group = undefined;

// console.log("forEach로 돌렸을 때")
// arr.forEach((v) => {
//     console.log(v);
// })

// console.log("for문으로 돌렸을 때")
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// console.log("배열의 길이 확인");
// console.log(arr.length);

// console.log("배열의 속성에 접근");
// console.log(arr.input);

// 문자열 데이터와 메타데이터를 포함하는 배열을 생성하는 함수
// function createProperty(strings, fileName, date, author) {
//     const arr = strings.slice(); // 문자열 데이터를 배열로 복사
//     arr.metadata = { // 메타데이터를 배열 속성으로 추가
//         fileName: fileName,
//         date: date,
// 		author : author,
//     };
//     // 메타데이터를 출력하는 함수를 배열 속성으로 추가
//     arr.printMetadata = function() {
//         console.log(`파일 이름: ${this.metadata.fileName}`);
//         console.log(`작성일자: ${this.metadata.date}`);
// 				console.log(`작성자 : ${this.metadata.author}`);
//     };
//     return arr;
// }

// const myData = createProperty(['사과', '복숭아', '딸기'], '과일 DB', '2024-02-18', '홍길동');
// console.log(myData); // 배열 데이터 출력
// console.log(myData.length);
// myData.printMetadata(); // 메타데이터 출력

// const fileObj = {
//     data : ["사과", "복숭아", "딸기"],
//     title : "과일 DB",
//     date : "2024-02-18",
//     author : "홍길동",

//     print : function(){
//         console.log(`파일데이터 : ${this.data}`);
//         console.log(`파일이름 : ${this.title}`)
//         console.log(`작성일자 : ${this.date}`)
//         console.log(`작성자 : ${this.author}`)
//     }
// }

// console.log(fileObj);
// fileObj.print();

// const re = /\w+\s/g;
// const re = new RegExp("\\w+\\s","g");
// const str = "fee fi fo fum";
// const myArray = str.match(re);
// console.log(myArray);

const str = "fee fi fo fum";
const re = /\w+\s/g;

// console.log(re.exec(str)); // ["fee", index:0, input : "fee fi fo fum"]
// console.log(re.exec(str)); // ["fi", index:4, input : "fee fi fo fum"]
// console.log(re.exec(str)); // ["fo", index:7, input : "fee fi fo fum"]
// console.log(re.exec(str)); // null

console.log(str.match(re)); // [ 'fee ', 'fi ', 'fo ' ]


