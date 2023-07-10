var balance = 0;
var lastTransaction = 0;

function deposit(amt) {
  console.log("In deposit mode");
  console.log(`You have deposited ${amt} Rs`);
  //   balance = balance + amt;
  balance += amt;
  console.log("Balance after Deposit", balance);
}
function statement() {
  // console.log("Statement is Balance:", balance, lastTransaction);
  console.log(
    `Bank Statement: Balance is ${balance} and last transaction was ${lastTransaction}`
  );
  //   console.log("lastTransaction", lastTransaction);
}
function withdraw(amt) {
  console.log("In Withdraw mode");
  if (amt > 0 && amt <= balance) {
    console.log(`Withdraw Amount is ${amt}`);
    balance = balance - amt;
    lastTransaction = balance;
    console.log("Balance after withdraw", lastTransaction);
  } else {
    console.log("Not Enough Balance");
  }
}
deposit(500);
statement();
withdraw(200);
statement();

//You can also write like this using prompt function
// deposit(Number(prompt("Enter the amount you want to deposit..")));
// statement();
// withdraw(Number(prompt("Enter the amount you want to withdraw..")));
// statement();
