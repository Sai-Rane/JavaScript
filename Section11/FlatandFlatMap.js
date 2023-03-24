//FindIndex method returns the index of the found element and not the element
//The findIndex method also takes  a callback function

// BANKIST APP

// Data
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

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const username = user
//   .toLowerCase()
//   .split(" ")
//   .map(function (name) {
//     return name[0];
//   })
//.join(""); //split returns a array
//console.log("username", username); // stw

const createUsernames = function (acc) {
  //forEach return undefined
  return acc.map(function (ele) {
    return ele.owner
      .toLowerCase()
      .split(" ")
      .map((ele) => ele[0])
      .join("");
  });
};
const userName = createUsernames(accounts);
console.log("userName", userName);

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (ele, index) {
    const type = ele > 0 ? "deposit" : "withdrawal";
    const html = `
                <div class="movements__row">
                  <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
                  <div class="movements__value">${ele}€</div>
                </div>
                `;

    //insertAdjacentHTML is a method which accepts 2 arguments. 1st argument is the position in which we want to attach the html and 2nd is the argument which contains the html
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, ele) => acc + ele);
  //Creating a new property
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((ele) => ele > 0)
    .reduce((acc, ele) => acc + ele, 0);
  console.log("incomes", incomes);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((ele) => ele < 0)
    .reduce((acc, ele) => acc + ele);
  console.log("out", out);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter((ele) => ele > 0)
    .map((ele) => (ele * acc.interestRate) / 100)
    .reduce((acc, ele) => acc + ele, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display balance
  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc);
};

//Event Handler
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  //To Prevent form from Submitting we use preventDefault
  e.preventDefault();
  console.log("click");
  currentAccount = accounts.find(
    (ele) => ele.owner === inputLoginUsername.value
  );
  console.log("currentAccount", currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Welcome message
    console.log("entered");
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // //Display movements
    // displayMovements(currentAccount.movements);

    // //Display balance
    // calcDisplayBalance(currentAccount);

    // //Display summary
    // calcDisplaySummary(currentAccount);

    //Clear Input fields after Login
    inputLoginUsername.value = inputLoginPin.value = "";

    //The blur method allows the field to loose its focus
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

//Implementing Transfers

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click");
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (ele) => ele.owner === inputTransferTo.value
  );
  console.log(amount, receiverAcc);

  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.owner !== currentAccount.owner
  ) {
    //Doing the Transfer
    console.log("Transfer Valid");
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Update UI
    updateUI(currentAccount);
  }
});

//Loan feature
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click");
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((ele) => ele >= amount * 0.1)
  ) {
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

//Closing a Account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("close");
  if (
    inputCloseUsername.value === currentAccount.owner &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    console.log("name matches");
    const index = accounts.findIndex(
      (ele) => ele.owner === currentAccount.owner
    );
    console.log(index);
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

//Some and Every
//Some method also has a callback

// includes method checks equality
console.log(movements.includes(-130)); //true.  includes is used to check whether a value is present in certain array

//Some method checks condition
const anyDeposits = movements.some((ele) => ele > 0);
console.log(anyDeposits); //true

//Lets implement our Laon feature of Bankist App
//The bank has a rule that it only grants a loan if it has atleast one deposit with atleast 10% of the requested loan amount. Refer line 219 to see the function for loan

//EVERY method
//every method only returns true if all of the elements in the array satisfy the conditionthat we pass in(i.e If every element passes the test in the callback function only then the every method returns true)

console.log(movements.every((ele) => ele > 0)); //false
console.log(account4.movements.every((ele) => ele > 0)); //true

//Separate callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit)); //true
console.log(movements.every(deposit)); //false
console.log(movements.filter(deposit)); //[200, 450, 3000, 70, 1300]

//flat and flatMap methods

//flat method removes the nested array and gives a single array. The flat goes only one level deep
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); //[1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
console.log(arrDeep.flat()); //[Array(2), 3, Array(2), 6, 7, 8]  This means that the flat method goes only one level deep
console.log(arrDeep.flat(2)); //Here 2 is the level we are specifying. [1, 2, 3, 4, 5, 6, 7, 8]

//Lets add all the movements array
const accountMovements = accounts.map((ele) => ele.movements);
console.log(accountMovements); //[Array(8), Array(8), Array(8), Array(5)]

const allMovements = accountMovements.flat();
console.log(allMovements); //[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

const overallBalance = allMovements.reduce((acc, ele) => ele + acc, 0);
console.log(overallBalance); //17840

//Writing the addition of all movements using chaining
// const overallBalance = accounts
//   .map((ele) => ele.movements)
//   .flat()
//   .reduce((acc, ele) => acc + ele, 0);
// console.log(overallBalance);

//flatMap method - It is acombination of flat and map method
const overallBalance2 = accounts
  .flatMap((ele) => ele.movements)
  .reduce((acc, ele) => acc + ele, 0);
console.log(overallBalance2); //17840
