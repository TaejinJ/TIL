// Spilt String
// EX) "abcdefg" => ["ab","cd","ef","g_"]
//      "abcd"   => ["ab","cd"];
function solution(str) {

    let i = 0; // or using var 
    //1.결과로 담아줄 빈배열 만들기. or new Array(); 
    let arr = [];
    //2. 인수가 짝수가 아닐경우 +"_" 붙여주기.
    if (str.length % 2 !== 0) {
        str = str + "_";
    }
    //3. 짝수일경우 while문으로  str의 길이가 끝날때 까지 계속 돌려주기 ( i+=2로 가운데 값 스킵해줌)
    while (i < str.length) {
        arr.push(str[i] + str[i + 1]);
        i = i + 2;
    }


    return arr;
}

console.log(solution("abcd"));
console.log(solution("abcdf"));