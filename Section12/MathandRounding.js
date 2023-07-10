console.log(Math.sqrt(4)); //2
//OR
console.log(4 ** (1 / 2)); //2
console.log(8 ** (1 / 3)); //Finding Cube root 2

//Finding Maximum Value
console.log(Math.max(10, 2, 50, 20)); //50
console.log(Math.min(10, 2, 50, 20)); //2

//Generating a random number
//Math.random gives us Number between 0 and 1
console.log(Math.trunc(Math.random() * 6));

const randomInt = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + 1);
};
console.log(randomInt(10, 20));

//Rounding Integers
//floor is better than trunc
console.log(Math.trunc(10.2)); //trunc removes Decimal 10

console.log(Math.round(10.2)); //10
console.log(Math.ceil(10.2)); //11
console.log(Math.floor(10.2)); //10

console.log(Math.floor(-20.2)); //-21
console.log(Math.trunc(-20.2)); //-20

//Rounding Decimals
//toFixed always returns a String
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(3)); //2.700
console.log((2.345).toFixed(2)); //2.35
