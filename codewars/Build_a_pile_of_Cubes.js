//  건물의 부피(m)가 주어지면 이 건물에 구축해야할 큐브의 수 (n)을 구하라는 문제.
// 식은 (n-1)³ + (n-2)³+(n-3)³+(n-4)³+...+1³ 이런식.

function findnb(m) {
  // 역으로 생각해서 1³ + (n-1)³+(n-2)³+...+n³이런식으로 생각하면 편함.
  let n = 1;
  let total = 0;
  while (total < m) {
    total += Math.pow(n, 3);
    if (total === m) {
      return n;
    }
    n++;
  }
  return -1;
}
