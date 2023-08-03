// DESCRIPTION:
// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

function bouncingBall(h, bounce, window) {
    //1. 모든 조건이 만족 되지않으면 -1 
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
      return -1;
    }
  //2. 조건이 충족되면 그때부터 숫자1 ( 처음 공이 떨어질때 보는 횟수)
    let count = 1;
    //3. 공이 bounce %만큼 튀기는데 그 값이 window 보다 크면 엄마가 봄 튕길때 한번보고 내려올때 한번 더보니 count+=2;
    while ((h *= bounce) > window) {
      count += 2;
    }
    return count;
  }