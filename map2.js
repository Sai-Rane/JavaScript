const obj1 = [
  { firstName: "John", lastName: "Peter" },
  { firstName: "William", lastName: "Jones" },
  { firstName: "Mark", lastName: "Twin" },
];
const obj2 = obj1.map(transform);
function transform(x) {
  return x.firstName + " " + x.lastName;
}
console.log(obj2);
