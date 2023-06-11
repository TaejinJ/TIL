/**Number.isInteger()메서드를 한번 더 안써도 되는 방법. */
function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

/** 쉽게 접근 
function isSquare(n) {
    if (n < 0) {
        return false;
    } else {
        const sqrtN = Math.sqrt(n);
        return Number.isInteger(sqrtN);
    }
}
 */