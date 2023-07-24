function solution(str,ending){

    // if(str.lastIndexOf(ending)=== str.length - ending.length) return true;
    // return false;



    return str.endsWith(ending);
}

console.log(solution(['abcde'],"cde"));