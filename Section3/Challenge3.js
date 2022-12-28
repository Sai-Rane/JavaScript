console.log("hello");
const miller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calculateBMI: function () {
    this.bmi = this.mass / this.height ** 2;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calculateBMI: function () {
    this.bmi = this.mass / this.height ** 2;
  },
};
miller.calculateBMI();
// console.log("Miller BMI", miller.bmi);
john.calculateBMI();
console.log("miller bmi", miller.bmi, "john.bmi", john.bmi);

if (miller.bmi > john.bmi) {
  console.log(
    `${miller.fullName} BMI ${miller.bmi} is higher than ${john.fullName} ${john.bmi}`
  );
} else {
  `${miller.fullName} BMI ${miller.bmi} is higher than ${john.fullName} ${john.bmi}`;
}
