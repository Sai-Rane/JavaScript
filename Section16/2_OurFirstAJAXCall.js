const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// In Javascript there are multiple ways of doing AJAX calls. We will first see the old school one, thats the xmlhttp request function
const request = new XMLHttpRequest();
//syntax: request.open("TYPE OF REQUEST","STRING CONTAINING THE URL")
request.open("GET", "https://restcountries.com/v3.1/name/germany");
// Endpoint is just another name for URL
request.send();

request.addEventListener("load", function () {
  console.log(this.responseText); //Here we will get JSON response
  // Lets convert the JSON data in JS Object in the next line
  const [data] = JSON.parse(this.responseText);
  console.log("data", data);

  const html = `
  <article class="country">
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
});

//Making a function , so no need to hardcode country name while making API call

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// const getCountryData = function (country) {
//   console.log("countryhajsdgjsa", country);
//   // In Javascript there are multiple ways of doing AJAX calls. We will first see the old school one, thats the xmlhttp request function
//   const request = new XMLHttpRequest();
//   //syntax: request.open("TYPE OF REQUEST","STRING CONTAINING THE URL")
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   // Endpoint is just another name for URL
//   request.send();

//   request.addEventListener("load", function () {
//     console.log(this.responseText); //Here we will get JSON response
//     // Lets convert the JSON data in JS Object in the next line
//     const [data] = JSON.parse(this.responseText);
//     console.log("data", data);

//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flags.svg}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${data.population}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages.deu}</p>
//       <p class="country__row"><span>💰</span>${data.currencies.EUR.name}</p>
//     </div>
//   </article>
//   `;

//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData("portugal");
// getCountryData("germany");
