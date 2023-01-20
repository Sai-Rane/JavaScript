//Functions accepting Callback Functions

const oneWord = function (str) {
  //function which will replace all the spaces in a string
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  console.log(first, others);
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher Order Function is shown below - It is taking a function as an argument
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`); //Original String: Javascript is the best
  console.log(`Transformed string: ${fn(str)}`); //Transformed string: JAVASCRIPT is the best
  console.log(`Transformed by: ${fn.name}`); //Transformed by: upperFirstWord
};

transformer("Javascript is the best", upperFirstWord); //passing function upperFirstWord as a value and not as a function like this.. upperFirstWord()
transformer("Javascript is the best", oneWord);

const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5); //as soon as we click on the body (page) of html document high5 function will get call
