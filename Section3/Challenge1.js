console.log("hello");
const dolphinRound1 = 85;
const dolphinRound2 = 54;
const dolphinRound3 = 41;
const dolphinSum = dolphinRound1 + dolphinRound2 + dolphinRound3;

const koalaRound1 = 23;
const koalaRound2 = 34;
const koalaRound3 = 27;
const koalaSum = koalaRound1 + koalaRound2 + koalaRound3;

const calcAverage = (dolphinSum) => {
  return dolphinSum / 3;
};

const calcAverage1 = (koalaSum) => {
  return koalaSum / 3;
};
const dolphinAvg = calcAverage(dolphinSum);
const koalaAvg = calcAverage(koalaSum);

function checkWinner(a, b) {
  if (a > 2 * b) {
    console.log("Dolphin wins🏆");
  } else if (b > 2 * a) {
    console.log("Koalas win🏆");
  } else {
    console.log("Match draw");
  }
  //   console.log(`Koala win ${b} vs ${a}`);
}
checkWinner(dolphinAvg, koalaAvg);
