// DESCRIPTION:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    // ===1은 음수는 해당되지않기에 !==0사용.
    const oddNumbers = integers.filter((e)=>e%2!==0);
    const evenNumbers = integers.filter((e)=>e%2===0);

    return oddNumbers.length === 1 ? oddNumbers[0] : evenNumbers[0]; 
}

console.log(findOutlier([1,3,5,7,8,9,11]));