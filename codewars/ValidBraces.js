/**Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False*/

function validBraces(braces) {
  // matches라는 객체에 키와 밸류로 구성
  var matches = { "(": ")", "{": "}", "[": "]" };
  var stack = [];
  var currentChar;

  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      stack.push(currentChar);
      // console.log(stack);
      // console.log(currentChar);
    } else {
      if (currentChar !== matches[stack.pop()]) {
        // console.log(currentChar); //안닫힌 괄호
        return false;
      }
    }
  }

  return stack.length === 0;
}

//test

console.log(validBraces("(){}[]"));
console.log(validBraces("({}[]"));
console.log(validBraces("(){]"));
console.log(validBraces("(){}[])"));
console.log(validBraces("(){}[]{{{"));
