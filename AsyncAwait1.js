async function bell() {
  console.log("Inside bell function");
  const response = await fetch("https://api.github.com/users");
  // console.log("response", response.json());
  console.log("before response");
  const users = await response.json();
  console.log("users resolved");
  return users;
  return "bell";
}
console.log("Before calling bell function");
const b = bell();
console.log("After calling bell function");
console.log(b);
b.then((data) => {
  console.log(data);
});
console.log("Last line of code");
