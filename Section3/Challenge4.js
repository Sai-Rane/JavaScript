console.log("hello");
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const calculateTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};
for (let i = 0; i < bills.length; i++) {
  const tip = calculateTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}
console.log("bills", bills, tips, total);

//Bonus Challenge Solution
const calculateAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  //   console.log("sum", sum);
  return sum / arr.length;
};
console.log(calculateAverage([2, 3, 6]));
console.log(calculateAverage(total));
console.log(calculateAverage(tips));
