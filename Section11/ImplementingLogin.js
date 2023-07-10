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
          <div class="movements__value">${ele}</div>
        </div>
        `;

    //insertAdjacentHTML is a method which accepts 2 arguments. 1st argument is the position in which we want to attach the html and 2nd is the argument which contains the html
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, ele) => acc + ele);
  labelBalance.textContent = `${balance} €`;
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

//Event Handler
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  //Prevent form from Submitting
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

    //Display movements
    displayMovements(currentAccount.movements);
    //Display balance
    calcDisplayBalance(currentAccount.movements);

    //Display summary
    calcDisplaySummary(currentAccount);

    //Clear Input fields after Login
    inputLoginUsername.value = inputLoginPin.value = "";

    //The blur method allows the field to loose its focus
    inputLoginPin.blur();
  }
});
