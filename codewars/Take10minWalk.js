// DESCRIPTION:
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment,
// so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones
// -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function
// that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point.
//  Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
//  It will never give you an empty array (that's not a walk, that's standing still!).

/**첫번째로 생각한 방법 */

function isValidWalk(walk) {
  function Count(val) {
    // Count 라는 함수를 만들어 filter 메서드를 통해 값이 같은걸 세어 반환.
    return walk.filter((a) => val === a).length;
  }
  // walk.length가 10이어야 하고,(10분걷기니까) Count 함수의 n과 s의 갯수가 같아야함, e와w의 갯수가 같아야함.
  return (
    walk.length === 10 && Count("n") === Count("s") && Count("w") === Count("e")
  );
}

/**풀다보니까 너무 가독성이 떨어지는거같아서 어떤방법이 있나 고민해봄. */

function isValidWalk(walk) {
  if(walk.length !==10) return false;
  let x = 0;
  let y = 0;
  for (let direction of walk) {
    switch (direction) {
      case "n":
        y += 1;
      case "s":
        y -= 1;
      case "w":
        x += 1;
      case "e":
        x -= 1;
        break;
    }
  }
  // 총 이동거리가 10이어야 함(소요시간10분) 시작지점으로 돌아왔는지 확인
  return x===0 && y===0;
}

// for문으로 순회하면서 switch문으로 가독성을 늘림.