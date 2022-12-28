const question = new Map([
  ["question", "What is the best programming language in the world??"],
  [1, "C"],
  [2, "Java"],
  [3, "JS"],
  ["correct", 3],
  [true, "Correct 🎆"],
  [false, "Try Again"],
]);
console.log(question);

//Iteration is also possible on Maps bec Maps are also Iterables

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

//prompt returns a string so converting it in number format
// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

// question.get("correct") === answer;

console.log(question.get(question.get("correct") === answer));

//Converting Map to Array
console.log([...question]);

console.log([...question.keys()]);

console.log([...question.values()]);
