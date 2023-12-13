//Avoiding passing a second callback and using catch and finally for handling errors

const btn = document.querySelector(".btn-country");
const getCountryData = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      console.log("in here");
    });
  //No matter Promise is rejected or fulfilled the finally block will always run and the then method is called when the promise is fulfilled and the catch method is called when Promise is rejected
};
btn.addEventListener("click", function () {
  getCountryData("portugal");
});
