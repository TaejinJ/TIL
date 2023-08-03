// DESCRIPTION:
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


function oddOrEven(array){
    return array.reduce((a,b)=>a+b,0) % 2===0 ? "even": "odd";
}
//reduce 함수를 통해 배열의 합을 더해서 %2를 했을때 나머지가 0이면 even 아니면 odd를 반환.