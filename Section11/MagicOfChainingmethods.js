const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

//converting all of the deposit amount to US Dollars
const totalDepositInUSDollar = movements
  .filter((ele) => ele > 0) //this will give you all the positive numbers..result of filter is an array.Now on that array we will perform map
  .map((ele) => ele * euroToUsd) //this line will convert all the filter array elements to US Dollars
  .reduce((acc, ele) => acc + ele, 0);

console.log("totalDepositInUSDollar", totalDepositInUSDollar);
