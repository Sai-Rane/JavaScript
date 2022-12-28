console.log("hello");
function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
}
const bills = [125, 555, 44];
const tip = calcTip(bills[0]);
console.log(tip);
const tip1 = calcTip(bills[1]);
const tip2 = calcTip(bills[2]);
const tips = [tip, tip1, tip2];
console.log("tips", tips);
