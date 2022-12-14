function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";
    for (let i = 0; i < arr.length; i++) {
        format = format.replace('x', arr[i]);

    }
    return format;


}
// 처음에 작성해본것과 너무 비효율적인것 같아서 위와 같이 생각해봤다.
// function createPhoneNumber1(numbers) {
//     return (
//         "(" +
//         numbers.slice(0, 3).join("") +
//         ") " +
//         numbers.slice(3, 6).join("") +
//         "-" +
//         numbers.slice(6, 10).join("")
//     );
// }

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 7]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 7]));

// [0,2,1,4,5,6,7,8,9];