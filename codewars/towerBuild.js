// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nfloor) {
    const tower = []; // 타워 패턴을 저장할 배열
  
    for (let i = 0; i < nfloor; i++) {
      const spaces = ' '.repeat(nfloor - 1 - i); // 현재 층의 왼쪽 공백
      const blocks = '*'.repeat(2 * i + 1); // 현재 층의 중앙에 위치한 '*' 블록
      const floor = spaces + blocks + spaces; // 현재 층의 패턴
      tower.push(floor); // 현재 층의 패턴을 타워 배열에 추가
    }
  
    return tower; // 타워 패턴 배열 반환
  }
  

console.log(towerBuilder(5));