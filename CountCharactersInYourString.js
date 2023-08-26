// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    //저장할 빈객체.
   const charCount ={};

   for (const char of string) {
    //해당 문자열이 카운트 됐으면 +1 , 없으면 1.
    charCount[char] = charCount[char] ? charCount[char]+1 : 1;
   }
     // 결과 객체를 반환
   return charCount;
  }