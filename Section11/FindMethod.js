//Find Method
//The find method also accepts a callback function
//The find method returns a true or false value
//The find method does not return a new array
//The find method is similar to the filter method, but the filter method returns all the elements which match the condition, while the find method returns the first element which matches the condition
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((ele) => ele < 0);
console.log("firstWithdrawal", firstWithdrawal); //-400

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log("account", account); //{owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222}
