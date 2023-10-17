//How to handle errors in promises
//A Promise in which error happened is a Rejected Promise
//The only way in which the fetch promise rejects is when the user loses its internet connection.

//There are 2 ways of handling rejections. The 1st one is is to pass a second callback function into the then method.The first callback function in the then method is always gonna be called for the fulfilled promise..but we can also pass in a second callback which will be called when the promise was rejected

const btn = document.querySelector(".btn-country");
const getCountryData = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(
      (response) => response.json(),
      (err) => alert(err) // passing a second callback which will be called when the promise is rejected
    )
    .then((data) => {
      console.log("data", data);
    });
};
btn.addEventListener("click", function () {
  getCountryData("portugal");
});
