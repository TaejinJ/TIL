function solution(number) {
    let Roman = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
        result = '';

    for (var i in Roman) {
        while (number >= Roman[i]) {
            result += i;
            number -= Roman[i];
        }
    }
    return result;
}
console.log(solution(2000));
console.log(solution(2022));