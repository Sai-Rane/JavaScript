const gameEvents = new Map([
  [17, "Goal"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [64, "Yellow Card"],
  [69, "Red Card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow Card"],
]);
console.log(gameEvents); // {17 => 'Goal', 36 => 'Substitution', 47 => 'Goal', 61 => 'Substitution', 64 => 'Yellow Card', …}

//1
console.log(gameEvents.values());
const events = new Set(gameEvents.values());
console.log(events);
//Converting it in a array using spread operator
console.log([...events]);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()];
console.log(time);
console.log(time.pop());

//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`${half} [HALF] ${min}: ${event}`);
}
