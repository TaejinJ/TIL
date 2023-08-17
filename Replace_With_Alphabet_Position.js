// DESCRIPTION:
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  //1.text를 순회하면서 대소문자 관계없이 숫자로 반환.
  //2. charCodeAt() 사용.
  const result = [];
  for (let char of text) {
    let charCode = char.toLowerCase().charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      const index = charCode - 96; //알파벳의 순서를 얻어야해서 (a는 97)
      result.push(index);
    }
}
return result.join(" ");
}

console.log(alphabetPosition("alph"));