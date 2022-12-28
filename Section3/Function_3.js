function cutFruitPieces(fruit) {
  return fruit * 4;
}
//apple and mango are parameters
function fruitProcessor(apple, mango) {
  console.log(apple, mango);
  const applePieces = cutFruitPieces(apple);
  const mangoPieces = cutFruitPieces(mango);
  const juice = `Juice with ${applePieces} apples and ${mangoPieces} mangoes`;
  console.log(juice);
}
// In the below line, 2 and 5 are arguments
fruitProcessor(2, 5);
