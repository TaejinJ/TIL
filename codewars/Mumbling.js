/** This time no story, no theory. The examples below show you how to write function accum: */
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  return s
    .split("")
    .map((a, i) => a.toUpperCase() + a.toLowerCase().repeat(i))
    .join("-");
}
console.log(accum("abcd")); //-> "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); //-> "C-Ww-Aaa-Tttt"
