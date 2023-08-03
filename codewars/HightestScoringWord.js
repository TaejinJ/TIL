// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
    // 입력 문자열을 분할하여 배열을 생성.
    let wordList = x.split(' ');
    
    // 각 단어의 점수를 계산하여 배열로 저장.
    let scores = wordList.map(word => {
      
      let score = [...word].reduce((sum, char) => sum + char.charCodeAt(0) - 96, 0);
      return score;
    });
  
    // 가장 높은 점수를 가진 단어의 인덱스를 찾는다..
    let highestIndex = scores.indexOf(Math.max(...scores));
  
    // 가장 높은 점수를 가진 단어를 반환.
    return wordList[highestIndex];
  }
  