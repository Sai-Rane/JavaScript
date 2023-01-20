//Short Circuiting (&& ||)

// && AND Operator
// || OR Operator

//Using non boolean values as a operand
console.log(3 || "Jonas"); //output is 3

//3 Properties about AND and OR Operator
//They can use any Data Type
//They can return any Data Type
//They do short circuiting

//short circuiting means.. if the first value is a truthy value it will return a truthy value.If the first value is falsy value then it will check the second value. This is the case for OR Operator

//examples
console.log("" || "Jonas"); //Jonas
console.log(undefined || null); //null
console.log(true || 0); //true
console.log(null || 0); //0
console.log(undefined || null || 0 || "Jonas" || "Martin"); //Jonas

// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

//AND Operator Short Circuiting
console.log("AND Operator");
console.log(0 && "Jonas"); //If the first operand is false the entire result is false  //0
console.log(7 && "Jonas"); //Jonas

console.log("Jonas" && 3 && null && "Martin"); //null
console.log(0 && null); //0
console.log(null && 0); //null

//Practical example for AND Operator

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("Mushrooms", "Spinach");
// }
//instead of using if statement we can use AND Operator
// restaurant.orderPizza && restaurant.orderPizza("Mushroom", "Spinach");
