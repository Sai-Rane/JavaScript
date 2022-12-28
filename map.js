const a = [11, 4, 9, 10];
console.log(a);
const b = a.map(test);
function test(x) {
  return x * 2;
}
console.log(b);
