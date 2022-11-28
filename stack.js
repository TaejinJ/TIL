//stack LIFO
class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }
  pop(index) {
    if (index === this.arr.length - 1) {
      return this.arr.pop();
    }
    let result = this.arr.splice(index, 1);
    return result;
  }
  empty() {
    if (this.arr.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  /**스택의 맨윗부분을 보는 메서드 */
  top() {
    return this.arr[this.arr.length - 1];
  }
  /**스택의 제일 마지막부분 */
  bottom() {
    return this.arr[0];
  }
}
let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);
console.log(s); // [10,20,30,40,50]
console.log(s.arr[1]); // 20
let popValue = s.pop(2); //30
console.log(popValue); //30
console.log(s.top());
console.log(s.bottom());
// QUE FIFO
