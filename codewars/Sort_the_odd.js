// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(arr) {
    // 홀수만 필터링하여 새 배열 생성
    const oddNumbers = arr.filter(num => num % 2 !== 0);
  
    // 홀수 배열을 오름차순으로 정렬
    oddNumbers.sort((a, b) => a - b);
  
    // 원본 배열을 순회하면서 홀수 자리에 정렬된 홀수 값을 삽입
    const result = arr.map(num => (num % 2 !== 0 ? oddNumbers.shift() : num));
  
    return result;
  }