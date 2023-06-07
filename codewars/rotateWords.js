// Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

//     rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
// Note: The original string should be included in the output array The order matters.
//Each element of the output array should be the rotated version of the previous element.The output array SHOULD be the same length as the input string The function should return an emptry array with a 0 length string,
// '', as input

function rotate(string) {
    if (string === "") {
        return [];
    }
    let res = [];
    let str = string;
    for (let i = 0; i < str.length; i++) {
        str = str.slice(1) + str[0];
        res.push(str);

    }
    return res;
}


// function rotate(str) {
//     if (str === "") {
//         return [];
//     }
//     const result = [str];
//     for (let i = 1; i < str.length; i++) {
//         result.push(result[i-1].slice(1) + result[i-1][0]);
//        // console.log(result[i-1].slice(1),result[i-1][0])

//     }
//     return result;
// }
// console.log(rotate("Hello"));
