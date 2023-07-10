const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ["a", "b", "c", "d", "e"];

//SLICE METHOD
console.log(arr.slice(2)); //c,d,e
console.log(arr.slice(-2)); //d,e
console.log(arr.slice()); //a,b,c,d,e

//SPLICE METHOD
//SPLICE also mutates the original array
// splice(1,2)  First parameter in splice method indicates the start and the second parameter indicates how many elements to be deleted
console.log("SPLICE");
console.log(arr.splice(2)); //c,d,e
console.log(arr); //a,b

//REVERSE
//The reverse method actually mutates the original array
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); //['f', 'g', 'h', 'i', 'j']
console.log(arr2);

//CONCAT
let arr1 = ["a", "b", "c", "d", "e"];
const letters = arr1.concat(arr2);
console.log("letters", letters); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr1, ...arr2]); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//JOIN
console.log(letters.join("-")); //a-b-c-d-e-f-g-h-i-j
