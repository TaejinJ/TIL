// A Hamming number is a positive integer of the form 2i3j5k, for some non - negative integers i, j, and k.

// Write a function that computes the nth smallest Hamming number.

//     Specifically:

// The first smallest Hamming number is 1 = 203050
// The second smallest Hamming number is 2 = 213050
// The third smallest Hamming number is 3 = 203150
// The fourth smallest Hamming number is 4 = 223050
// The fifth smallest Hamming number is 5 = 203051
// The 20 smallest Hamming numbers are given in the Example test fixture.

// Your code should be able to compute the first 5 000(LC: 400, Clojure: 2 000, Haskell: 12 691, NASM, C, D, C++, Go and Rust: 13 282) Hamming numbers without timing out.

function hamming(n) {
    const hammingNums = [1]; // 계산될 해밍수를 저장할 배열.
    let i = 0, j = 0, k = 0; // 새 해밍 수를 생성하는 지수
    while (hammingNums.length < n) {
        // 새로운 해밍넘버를 생성
        const nextI = hammingNums[i] * 2;
        const nextJ = hammingNums[j] * 3;
        const nextK = hammingNums[k] * 5;
        // 가장 작은 수를 선택하여 배열에 추가
        const nextHamming = Math.min(nextI, nextJ, nextK);
        hammingNums.push(nextHamming);

        i += Number(nextHamming === nextI);
        j += Number(nextHamming === nextJ);
        k += Number(nextHamming === nextK);
    }
    return hammingNums[n - 1]; // return the nth Hamming number
}

console.log(hamming(20));

// 다시 풀어볼것 해밍수에 대해 부족함..