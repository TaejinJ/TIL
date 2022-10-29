function time() {
  setTimeout(() => {
    console.log("1.5초 타이머");
  }, 1500);

  for (let index = 0; index < 3; index++) {
    console.log(index);
  }
  console.log("3초걸리는 for문 ");
}
time();

console.log("메인!끝!");
