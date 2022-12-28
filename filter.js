const a = [1, 2, 3, 10, 20];
const b = a.filter(greater);
function greater(x) {
  return x > 5;
}
console.log(b);
