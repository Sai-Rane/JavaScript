console.log("hello");
//Finding Max number in Array
// const calculateMax = function (temp) {
//   let max = 0;
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] > max) {
//       max = temp[i];
//     }
//   }
//   console.log(max);
// };
// calculateMax([1, 10, 2]);

//Finding Min Value in Array
const calculateMin = function (temp) {
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] < min) min = temp[i];
  }
  console.log(min);
};
calculateMin([20, 50, 10]);

//The concat method-Used to merge two arrays
const age = [1, 2, 10];
const age2 = [15, 20];
console.log("Type of array is", typeof age);
console.log("concat", age.concat(age2));
