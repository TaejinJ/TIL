function First() {
  console.log("first");
  niceTo();
}
function Second() {
  setTimeout(() => {
    console.log("second");
  }, 0);
  meetYou();
}
function Third() {
  console.log("Third");
}
hello();
//  result hello meetYou niceTo

/**ex)  */
setTimeout(() => {
  console.log("1번");
}, 5000);
setTimeout(() => {
  console.log("2번");
}, 3000);
setTimeout(() => {
  console.log("3번");
}, 1000);
console.log("4번");
// 4번->(1초)->3번->(2초)->2번->(2초)->1번
