/**
An isogram is a word that has no repeating letters, consecutive or non - consecutive.Implement a function that determines whether a string that contains only letters is an isogram.Assume the empty string is an isogram.Ignore letter case.

Example: (Input-- > Output)

"Dermatoglyphics" -- > true "aba" -- > false "moOse" -- > false(ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
 */

/**첫번째 방법 */
function Isograms(str) {
    str = str.toLowerCase();
    //중복제거를 위한 Set객체사용
    let letters = new Set();


    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // 이미 등장한 문자인 경우 이소그램이아님. 그리고 aba ,cbc같은 하나걸러나오는 문자열도 false
        if (letters.has(char) || str.indexOf(char, i + 1) !== -1) {
            return false;
        }
        //새로운 문자일 경우 Set 에 추가
        letters.add(char);

    }
    return true;

}
/**두번째 방법 */

function IsogramsSecond(str) {
    return new Set(str.toLowerCase()).size === str.length;
}



// console.log(Isograms('Dermatoglyphics'));
// console.log(Isograms('moose'));
// console.log(Isograms('aba'));
// console.log(Isograms('cbc'));
console.log(IsogramsSecond('Dermatoglyphics'));
console.log(IsogramsSecond('moose'));
console.log(IsogramsSecond('aba'));
console.log(IsogramsSecond('cbc'));

