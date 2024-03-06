// 4가지 포인터 변수가 필요하다 (L, R, T, B)
// L, T 는 0으로 초기화
// R은 m[0].length -1
// B은 m.length -1
// while 문 돌려준다.
// 1. TopLeft -> TopRight
// 2. TopRight -> BottomRight
// 3. BottomRight -> BottomLeft
// 4. BottomLeft -> TopLeft
// 이런식으로 순회한다.
// 조건문 : left <= right AND top <= bottom 일때 반복
// 문제 접근 방법
/**
 * 1. 4곳의 코너 포인터를 각각 변수에 저장 & 초기화
 * 2. TopLeft 에서 시작, 첫번째 row 왼쪽 -> 오른쪽으로 순회. 순회가 끝나면 Top포인터 + 1 증가
 * 3. RightTop 코너에서 시작, 맨우측 위 -> 아래로 순회. 순회 끝나면 Right 포인터 -1 감소
 * 4. RightBottom 코너에서 시작, 맨우측 아래 -> 오른쪽으로 순회. 순회 끝나면 Bottom 포인터 -1 감소
 * 5. Left포인터에서 시작, 왼쪽 -> 오른쪽으로 순회 Left포인터 + 1
 */

const test1 = [[1,2,3],[4,5,6],[7,8,9]]
const test2 = [[1,2,3,4], [5,6,7,8],[9,10,11,12], [13,14,15,16]];

function spiralMatrix(matrix){
    const result = [];

    let left = 0;
    let right = matrix[0].length -1;
    let top = 0;
    let bottom = matrix.length - 1;

    while(left <= right && top <= bottom){

        // TopLeft 에서 시작, 첫번째 row 왼쪽 -> 오른쪽으로 순회. 순회가 끝나면 Top포인터 + 1 증가
        for(let i=left; i<=right; i++){
            result.push(matrix[top][i]);
        }
        top++;

        // RightTop 코너에서 시작, 맨우측 위 -> 아래로 순회. 순회 끝나면 Right 포인터 -1 감소
        for(let i=top; i<=bottom; i++){
            result.push(matrix[i][right]);
        }
        right--;

        // top이 bottom보다 커지는 상황을 방지 & 배열 밖으로 나가는 것을 방지
        if(top <= bottom){
            // RightBottom 코너에서 시작, 맨우측 아래 -> 오른쪽으로 순회. 순회 끝나면 Bottom 포인터 -1 감소
            for(let i = right; i>=left; i--){
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // left가 right보다 커지는 상황을 방지 & 배열 밖으로 나가는 것을 방지
        if(left <= right){
            // Left포인터에서 시작, 왼쪽 -> 오른쪽으로 순회 Left포인터 + 1
            for(let i = bottom; i>=top; i--){
                result.push(matrix[i][left])
                left++;
            }
        }
    }
    return result;
}

console.log(spiralMatrix(test2));