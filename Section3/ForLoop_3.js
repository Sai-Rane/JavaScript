//looping array backwards
const jonasArray = [
  "Jonas",
  "Peter",
  2010 - 2005,
  "Teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}

//loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: lifting weights repetition ${rep}`);
  }
}
