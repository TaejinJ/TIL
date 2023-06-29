function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
      let leftSum = 0;
      let rightSum = 0;
  
      // 왼쪽 부분 배열의 합 계산
      for (let j = 0; j < i; j++) {
        leftSum += arr[j];
      }
  
      // 오른쪽 부분 배열의 합 계산
      for (let k = i + 1; k < arr.length; k++) {
        rightSum += arr[k];
      }
  
      // 왼쪽 합과 오른쪽 합이 같은 경우 인덱스 i 반환
      if (leftSum === rightSum) {
        return i;
      }
    }
  
    // 조건을 만족하는 인덱스가 없는 경우 -1 반환
    return -1;
  }