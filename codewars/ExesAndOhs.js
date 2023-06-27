function XO(str) {
    // 대문자로 변환
    str = str.toUpperCase();
  
    // 'o'와 'x'의 개수 세기
    let countO = 0;
    let countX = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'O') {
        countO++;
      } else if (str[i] === 'X') {
        countX++;
      }
    }
  
    // 개수 비교
    return countO === countX;
  }
  
  console.log(XO("ooxx")); // true
  console.log(XO("ozzo")); // true