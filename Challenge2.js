console.log("Hello");
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const bmiMark = markWeight / markHeight ** 2;
console.log(bmiMark);
const bmiJohn = johnWeight / johnHeight ** 2;
console.log(bmiJohn);
const bmiTotal = bmiMark - bmiJohn;
// console.log(bmiMark > bmiJohn);
if (bmiMark > bmiJohn) {
  console.log(`Mark has higher BMI than John which is ${bmiTotal}`);
} else {
  console.log(`John has higher BMI`);
}
