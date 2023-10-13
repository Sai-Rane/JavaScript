//callback hell-when we have nested callbacks in order to execute asynchronous tasks in sequence

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
<article class="country ${className}">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${data.population}</p>
    <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
    <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
  </div>
</article>
`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryandNeighbour = function (country) {
  console.log("countryhajsdgjsa", country);
  // In Javascript there are multiple ways of doing AJAX calls. We will first see the old school one, thats the xmlhttp request function

  //AJAX country call
  const request = new XMLHttpRequest();
  //syntax: request.open("TYPE OF REQUEST","STRING CONTAINING THE URL")
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  // Endpoint is just another name for URL
  request.send();

  request.addEventListener("load", function () {
    console.log(this.responseText); //Here we will get JSON response
    // Lets convert the JSON data in JS Object in the next line
    const [data] = JSON.parse(this.responseText);
    console.log("data", data);

    //render country 1
    renderCountry(data);

    //Get neighbour country 2.(Neighbour country data is depended on previous AJAX call)
    const [neighbour] = data.borders;
    if (!neighbour) return;

    //AJAX country call 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      console.log(this.responseText);
      const [data2] = JSON.parse(this.responseText);
      console.log("data2", data2);

      renderCountry(data2, "neighbour");
    });
  });
};
getCountryandNeighbour("portugal");
// getCountryandNeighbour("usa");

//Example of callback hell
setTimeout(() => {
  console.log("1 sec passed");
  setTimeout(() => {
    console.log("2 sec passed");
    setTimeout(() => {
      console.log("3 sec passed");
      setTimeout(() => {
        console.log("4 sec passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
