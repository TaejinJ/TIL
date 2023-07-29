// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  // 1. string이 빈 문자열이거나 대문자가 없을때
  if (string === "" || string === string.toLowerCase()) {
    return string;
  }
  // 2. 새로운 결과를 넣을 빈문자열
  let result = "";
  //3. for문으로 순회.

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === char.toUpperCase()) {
      result += " ";
    }
    result += char;
  }
  return result;
}
