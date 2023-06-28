// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

/**직관적으로 푼 방법 */
function getCount1(str) {
  str = str.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
/**다른 풀이방법 */
function getCount(str) {
  str = str.toLowerCase();
  return str.split("").filter((c) => "aeiou".includes(c)).length;
}
