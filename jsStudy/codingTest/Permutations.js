// 순열 문제 풀이
// 알고리즘 : 주어진 n 엘리먼트들의 모든 경우의 수를 계산하는 방법 / O(n!) 시간복잡도
// 백트래킹 (backtracking) / DFS 활용하여 문제 접근

// 예제 input : [1,2]
// 예제 output : [[1,2], [2,1]]

// 백트래킹 패턴
/*
    a. 반복 - 주어진 인풋 엘리먼트들에 반복문 돌리기
    b. 선택 - 탐색타겟을 설정/선택 을통해 엘리먼트 순서 교체
    c. 탐색 - DFS를 활용해 탐색 실행
    d. 선택취소 - 선택 과정 다시 복구하기(undo)
*/
// 순열 구조는 트리구조로 펼쳐놓고 보면 많은 도움이 된다.
// 첫번째 레벨 순회 i, j 
// swap(i, j)
// dfs()
// swap(i, j)

function permutation(arr){
    // 결과값 저장하는 배열
    const result = [];

    // DFS
    const dfs = (i, arr) => {
        // base condition
        // index가 배열의 길이랑 같다면 결과 배열에 push
        if(i === arr.length){
            // return result.push([...arr]);
            result.push([...arr].join(""));
        }

        // index부터 배열의 길이까지 반복
        for(let j=i; j<arr.length; j++){
            // swap
            // i와 j를 swap한다.
            [arr[i], [arr[j]]] = [arr[j], [arr[i]]];
            // dfs
            // dfs 또 시작
            dfs(i+1, arr);
            // swap back
            // 내려갔다가 다시 올라올 때 원래 값을 유지해야 하기 때문 만약 acb로 swap한 상태로 하면 결과 이상하게 나올 수 있음.
            [arr[i], [arr[j]]] = [arr[j], [arr[i]]];
        }

    }
    dfs(0, arr);
    return result;
}

console.log(permutation(["a", "b", "c"]));

// const newArr = ["a", "b", "c"];
// [newArr[0], newArr[1]] = [newArr[1], newArr[0]]
// console.log([...newArr]);


// dfs(0, ["a", "b", "c"])

// dfs(1, ["a", "b", "c"])
// dfs(2, ["a", "b", "c"])
// dfs(3, ["a", "b", "c"])

// dfs(1, ["a", "c", "b"])
// dfs(2, ["a", "c", "b"])
// dfs(3, ["a", "c", "b"])

// dfs(1, ["b", "a", "c"])
// dfs(2, ["b", "a", "c"])
// dfs(3, ["b", "a", "c"])

// dfs(1, ["b", "c", "a"])
// dfs(2, ["b", "c", "a"])
// dfs(3, ["b", "c", "a"])

// dfs(1, ["c", "b", "a"])
// dfs(2, ["c", "b", "a"])
// dfs(3, ["c", "b", "a"])

// dfs(1, ["c", "a", "b"])
// dfs(2, ["c", "a", "b"])
// dfs(3, ["c", "a", "b"])
// 이런식으로 이루어진다.