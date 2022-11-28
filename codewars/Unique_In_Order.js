/**Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

/**내풀이 */
var uniqueInOrder = function (iterable) {
  var arr = [];
  for (var i = 0; i < iterable.length; i++) {
    // 뒤에오는 문자와 비교함
    if (iterable[i] !== iterable[i + 1]) {
      // 같지않으면 arr에 푸시
      arr.push(iterable[i]);
    }
  }

  return arr;
};
/**Best Practice */
// var uniqueInOrder = function (iter) {
//   return [...iter].filter((a, i) => a !== iter[i - 1]);
// };
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
