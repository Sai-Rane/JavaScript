console.log("hello");
//Rest is opposite to the Spread Operator
const arr = [1, 2, ...[3, 4]]; //This is spread operator because it is on right side of assignment operator
console.log(arr);

//Rest syntax is shown below.The Rest operator is on the left side of the assignment operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1,2,[3,4,5]
