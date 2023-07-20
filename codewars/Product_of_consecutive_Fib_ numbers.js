// DESCRIPTION:
// The Fibonacci numbers are the numbers in the following integer sequence (Fn):

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

// such as

// F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// Some Examples of Return:
// (depend on the language)

// productFib(714) # should return (21, 34, true),
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false),
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true],
// productFib(800) # should return [34, 55, false],
// -----
// productFib(714) # should return {21, 34, 1},
// productFib(800) # should return {34, 55, 0},
// -----
// productFib(714) # should return {21, 34, true},
// productFib(800) # should return {34, 55, false},
// Note:
// You can see examples for your language in "Sample Tests".

/**처음 푼 방법 */

function Fibonacci(n) {
  // 1. n이 0과 1일때는 그대로 반환
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

function productFib(prod) {
  // 피보나치함수에서 2부터시작해서 n=2
  let n = 2;
  while (true) {
    const fn = Fibonacci(n);
    const fn_1 = Fibonacci(n + 1);
    const product = fn*fn_1;

    if (prod === product) {
      return [fn, fn_1, true];
    } else if (product > prod) {
      return [fn, fn_1, false];
    }
    n++;
  }
}

console.log(productFib(714));
console.log(productFib(800));
console.log(productFib(4895));
console.log(productFib(5895));
console.log(productFib(193864606));