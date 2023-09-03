// DESCRIPTION:
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
    // 숫자를 문자열로 변환
    const changeStr = n.toString();
    let digitSum = 0;
  
    // 각 자릿수를 더함
    for (let i = 0; i < changeStr.length; i++) {
      digitSum += Number(changeStr[i]);
    }
  
    // digitSum이 10 이상인 경우 계속해서 처리
    while (digitSum >= 10) {
      // 다시 자릿수를 더함
      const resultStr = digitSum.toString();
      digitSum = 0;
      for (let i = 0; i < resultStr.length; i++) {
        digitSum += Number(resultStr[i]);
      }
    }
  
    return digitSum;
  }
  