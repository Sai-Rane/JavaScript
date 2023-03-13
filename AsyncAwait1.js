async function bell() {
  console.log("Inside bell function");
  const response = await fetch("https://api.github.com/users");
  // console.log("response", response.json());
  const res = await response.json();
  console.log("res", res);
  return "bell";
}
console.log("Before calling bell function");
const b = bell();
console.log("After calling bell function");
console.log(b);
console.log("Last line of code");
