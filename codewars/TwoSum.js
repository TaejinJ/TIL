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

twoSum([1, 2, 3, 4, 5], 3);