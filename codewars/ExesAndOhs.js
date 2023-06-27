// function XO(str) {
//     // 대문자로 변환
//     str = str.toUpperCase();
  
//     // 'o'와 'x'의 개수 세기
//     let countO = 0;
//     let countX = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === 'O') {
//         countO++;
//       } else if (str[i] === 'X') {
//         countX++;
//       }
//     }
  
//     // 개수 비교
//     return countO === countX;
//   }
  
//   console.log(XO("ooxx")); // true
//   console.log(XO("ozzo")); // false

  function XO(str) {
      let sum = 0;
      for(var i=0; i<str.length; i++){
        //1. x가 있을때 1더하기 
      if(str[i].toLowerCase() === 'x') sum--;
      //2. o가 있을때 -1하기
      // ex) "xo" 0++ --; (0+1-1 = 0)
      if(str[i].toLowerCase() === 'o') sum++;
    }
    return sum == 0;
  }
  console.log(XO("ooxx")); // true
  console.log(XO("zzooxxx")); // false