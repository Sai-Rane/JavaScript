console.log("Hello");
const dolphinRound1 = 96;
const dolphinRound2 = 108;
const dolphinRound3 = 89;
const avgDolphin = (dolphinRound1 + dolphinRound2 + dolphinRound3) / 3;
console.log("Dolphin avg", avgDolphin);

const koalaRound1 = 88;
const koalaRound2 = 91;
const koalaRound3 = 110;
const avgKoala = (koalaRound1 + koalaRound2 + koalaRound3) / 3;
console.log("Koala avg", avgKoala);
if (avgDolphin > avgKoala) {
  console.log("Dolphin wins");
} else if (avgDolphin == avgKoala) {
  console.log("Match Draw");
} else {
  console.log("Koala Wins");
}
