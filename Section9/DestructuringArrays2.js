//Lets now destructure nested Arrays
const nested = [1, 2, [3, 4, 5]];

const [i, j, [k, l, m]] = nested;
console.log(i, j, k, l, m);

//lets set some default values
const [p, q, r] = [1, 2];
console.log(p, q, r); //here r will be undefined since at 3rd position there is no value

const [a = 1, b = 1, c = 1] = [10];
console.log(a, b, c); //output will be 10,1,1
