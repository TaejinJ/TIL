// DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

/**이게 보편적인 방법 */
function solution(number) {
  if (number < 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

/**Array를 이용해서 짜본 코드 */

function solution(number) {
  if (number < 0) {
    return 0;
  }
  let arr = [];
  for (let index = 1; index < number; index++) {
    arr.push(index);
  }
  let newArr = arr.filter((x) => x % 3 === 0 || x % 5 === 0);

  const result = newArr.reduce((a, b) => a + b, 0);
  return result;
}
