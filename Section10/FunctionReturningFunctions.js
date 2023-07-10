const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Martin");

//Challenge
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`); //Hii Jonas

greetArr("Hii")("Jonas");
