// DESCRIPTION:
// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function seriesNum(number) {
  if (number === 0) return "0.00";
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum += 1 / (1 + i * 3);
  }
  return sum.toFixed(2);
}
console.log(seriesNum(5));
console.log(seriesNum(10));