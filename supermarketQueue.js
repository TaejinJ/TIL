
// DESCRIPTION:
// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the 
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12



function queueTime(customers, n) {
    if (n === 1) {
      return customers.reduce((a, b) => a + b, 0);
    }
  
    // 키오스크를 나타내는 배열을 초기화.
    const tills = Array(n).fill(0);
  
    // 고객들을 키오스크에 할당.
    for (let i = 0; i < customers.length; i++) {
      // 현재 시간이 가장 적은 키오스크.
      const minTimeTill = tills.indexOf(Math.min(...tills));
  
      // 해당 키오스크에 고객을 할당.
      tills[minTimeTill] += customers[i];
    }
  
    // 모든 키오스크 중 가장 오래 걸리는 시간을 반환.
    return Math.max(...tills);
  }