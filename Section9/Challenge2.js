const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weighl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4.0",
  scored: ["Lewandovski", "Gnarby", "Lewandovski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1.
for (const [i, player] of game.scored.entries()) {
  //i gives you Index
  console.log(`Goal ${i}: ${player}`);
}

//2.
const odds = Object.values(game.odds);
console.log(odds); // [1.3,3.25,6.5]
let average = 0;
for (const odd of odds) {
  // console.log(average);
  average += odd;
  average /= odds.length;
  console.log("average", average);
}

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team, odd);
  const teamStr = team === "x" ? "draw" : `victory ${game[team]} `;
  console.log(`Odd of ${teamStr} ${odd}`);
}
