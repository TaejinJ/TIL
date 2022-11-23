function twoSum(numbers, target) {

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j];

            if (sum === target) {

                return [i, j];
            }

        }

    }

}


/**map을 사용 한 코드  */
// function twoSum(numbers, target) {
//     let seen = new Map();
//     for (let i = 0; i < numbers.length; i++) {
//         let x = numbers[i], y = target - x;
//         if (seen.has(y))
//             return [seen.get(y), i];
//         seen.set(x, i);
//     }
// }
twoSum([1, 2, 3, 4, 5], 3); // [0,1]
