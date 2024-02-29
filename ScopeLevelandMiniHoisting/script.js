// https://www.youtube.com/watch?v=eWwge2YpHhc

// child function can access parent data members but parent cannot access child data members
function one() {
  const username = "john";

  function two() {
    const website = "yt";
    console.log(username);
  }
  console.log(website); //error: You cannot access website variable outside its scope
  two();
}
one();

function addone(num) {
  return num + 1;
}
addone(5);

const addTwo = function (num) {
  return num + 2;
};
addTwo(5);
