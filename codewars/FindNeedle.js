// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 


// function findNeedle(haystack){
// return "found the needle at position " + haystack.indexOf("needle");
// }
// console.log(findNeedle(["조태진","초보","needle"])); // found the needle at position 2

/**findIndex()사용 */
function findNeedle2(haystack){
    let position = haystack.findIndex((e)=>e==="needle");
    return "found the needle at position " + position;
    }
    console.log(findNeedle2(["조태진","초보","needle"])); // found the needle at position 2