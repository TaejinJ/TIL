function persistence(num) {
    // 횟수 count
    let count = 0;

    // 10이상일때만 돌게 while문 작성
    while (num >= 10) {

        // num을 배열로 만들어서 ex) (["1","3","4"]) 이런식 reduce로 다 곱해주고 count++,  그걸 num에 다시 반환 예를들어 9가 되면 num은 10미만이기에 
        // 탈출하고 count를 리턴
        num = String(num)
            .split("")
            .reduce((a, b) => a * b);

        count++;
    }

    return count;
}

/** 다시 짠코드 */
function persistence(num) {
    for (var i = 0; num > 9; i++) {
        num = num.toString().split('').reduce((t, c) => t * c);
    }
    return i;
}