const request = fetch(
  "https://countries-api-836d.onrender.com/countries/name/portugal"
);
console.log("request", request);

// const getCountryData = function (country) {
//   //in then method pass a callback function that we want to be executed as soon as the promise is actually fulfilled.
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(function (response) {
//       console.log("response from API call", response);
//       //This is the response from API call
//       //In the body we have the actual data.In order to read the data from body we need to call the JSON method on the response.JSON is a method available on all responses of the fetch method
//       //   body: ReadableStream
//       //   bodyUsed: false
//       //   headers: Headers {}
//       //   ok: true
//       //   redirected: false
//       //   status: 200
//       //   statusText: ""
//       //   type: "cors"
//       //   url: "https://countries-api-836d.onrender.com/countries/name

//       return response.json(); //this json function is also a asynchronous function which means it will return a new promise
//     })
//     .then(function (data) {
//       console.log("data", data);
//       // {
//       //     "alpha2Code": "PT",
//       //     "alpha3Code": "PRT",
//       //     "altSpellings": [
//       //         "PT",
//       //         "Portuguesa",
//       //         "Portuguese Republic",
//       //         "República Portuguesa"
//       //     ],
//       //     "area": 92090,
//       //     "borders": [
//       //         "ESP"
//       //     ],
//       //     "callingCodes": [
//       //         "351"
//       //     ],
//       //     "capital": "Lisbon",
//       //     "currencies": [
//       //         {
//       //             "code": "EUR",
//       //             "name": "Euro",
//       //             "symbol": "€"
//       //         }
//       //     ],
//       //     "demonym": "Portuguese",
//       //     "independent": true,
//       //     "flag": "https://flagcdn.com/pt.svg",
//       //     "flags": {
//       //         "svg": "https://flagcdn.com/pt.svg",
//       //         "png": "https://flagcdn.com/w320/pt.png"
//       //     },
//       //     "gini": 33.5,
//       //     "languages": [
//       //         {
//       //             "iso639_1": "pt",
//       //             "iso639_2": "por",
//       //             "name": "Portuguese",
//       //             "nativeName": "Português"
//       //         }
//       //     ],
//       //     "latlng": [
//       //         39.5,
//       //         -8
//       //     ],
//       //     "name": "Portugal",
//       //     "nativeName": "Portugal",
//       //     "numericCode": "620",
//       //     "population": 10305564,
//       //     "region": "Europe",
//       //     "regionalBlocs": [
//       //         {
//       //             "acronym": "EU",
//       //             "name": "European Union"
//       //         }
//       //     ],
//       //     "subregion": "Southern Europe",
//       //     "timezones": [
//       //         "UTC-01:00",
//       //         "UTC"
//       //     ],
//       //     "topLevelDomain": [
//       //         ".pt"
//       //     ],
//       //     "translations": {
//       //         "br": "Portugal",
//       //         "cs": "Portugalsko",
//       //         "de": "Portugal",
//       //         "es": "Portugal",
//       //         "fa": "پرتغال",
//       //         "fr": "Portugal",
//       //         "hr": "Portugal",
//       //         "hu": "Portugália",
//       //         "it": "Portogallo",
//       //         "ja": "ポルトガル",
//       //         "nl": "Portugal",
//       //         "pl": "Portugalia",
//       //         "pt": "Portugal",
//       //         "ru": "Португалия",
//       //         "se": "Portugal",
//       //         "zh": "葡萄牙共和国"
//       //     },
//       //     "cioc": "POR"
//       // }
//     });
// };

//simplified version using Arrow function
const getCountryData = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(
      (response) => response.json() //this json function is also a asynchronous function which means it will return a new promise. To resolve this new promise we again need to use .then method
    )
    .then((data) => {
      console.log("data", data);
    });
};
getCountryData("portugal");
