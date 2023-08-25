function binaryCalculate(arr) {
    const n = arr.length;
    let result = 0;
  
    for (let i = 0; i < n; i++) {
      const binaryDigit = arr[n - 1 - i]; // 배열의 끝부터 순서대로 가져옴
      result += binaryDigit * Math.pow(2, i); // 2의 거듭제곱을 곱하여 더함
    }
  
    return result;
  }
  
//[0,0,0,1] => 1
//[1,1,1,1] => 15
//[0,0,1,0] => 2

console.log(binaryCalculate([1,1,1,1])); //15
console.log(binaryCalculate([1,0,1,1])); //11
console.log(binaryCalculate([1,0,0,1])); //9