// https://www.youtube.com/watch?v=suMvZWjjKbo

// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference type (Non Primitive)
Array, Objects, Functions;

//JS is a dynamically typed language

// To make unique values we use Symbol
const id = Symbol("123");
const idAnother = Symbol("123");
console.log(id === idAnother); //false

const a = 10;
console.log(typeof a); //number

const b = null;
console.log(typeof b); //object
