console.log("Hello");
const billValue = 275;
// const tipValue = 0.15 * 275;
// console.log(tipValue);
const tip =
  billValue <= 300 && billValue >= 50
    ? console.log(
        `The bill was ${billValue} ,the tip was ${(15 / 100) * billValue}`
      )
    : console.log(
        `The bill was ${billValue} ,the tip was ${(20 / 100) * billValue}`
      );
console.log(tip);
