// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).



/**XOR연산자를 활용한 풀이 */
function findOdd(A) {
    //요소의 갯수가 홀수 인것 체크 
    // 그값을 반환
      let result = 0;
      for(let num of A){
        result ^=num;
      }
      return result;
    }

  
/**hashmap을 이용한 찾기 */
function findOdd(A) {
    const counts = new Map();
    
    // 배열 요소의 등장 횟수를 세기
    for (let num of A) {
      if (counts.has(num)) {
        counts.set(num, counts.get(num) + 1);
      } else {
        counts.set(num, 1);
      }
    }
    
    // 홀수번 등장한 값을 찾기
    for (let [num, count] of counts) {
      if (count % 2 !== 0) {
        return num;
      }
    }
  }
  
  // 예시 테스트
  console.log(findOddNumber([7])); // 출력: 7
  console.log(findOddNumber([0])); // 출력: 0
  console.log(findOddNumber([1, 1, 2])); // 출력: 2
  console.log(findOddNumber([0, 1, 0, 1, 0])); // 출력: 0
  console.log(findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 출력: 4
  