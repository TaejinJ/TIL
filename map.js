const map = new Map();
let number = 2;
let str = "str";
let obj = { a: 1 };
let func = () => {
  console.log("func");
};
map.set(number, 4);
map.set(str, "2");
map.set(obj, 2);
map.delete(number);

console.log(map);
console.log(map.has(number));
console.log(map.size);
