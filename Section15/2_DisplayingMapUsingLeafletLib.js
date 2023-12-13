"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

//using the geolocation API

//the below function takes 2 callbacks as an input
//1st callback is for success when the browser successfully gets the coordinates of the current position
//2nd callback is for error

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log("latitude and longitude", latitude, longitude);
      console.log(
        `https://www.google.com/maps/place/Goregaon+Sports+Club/@${latitude},${longitude},15z/data=!4m6!3m5!1s0x3be7b72e4e215555:0xb0e590b959b55b44!8m2!3d19.1819719!4d72.8348733!16s%2Fg%2F11f4054qj7?entry=ttu`
      );

      const coords = [latitude, longitude];

      const map = L.map("map").setView(coords, 13); //L is the main function which Leaflet library gives us as an entry point
      console.log("map", map);
      L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup("A pretty CSS popup.<br> Easily customizable.")
        .openPopup();
    },
    function () {
      alert("Could not get your position");
    }
  );
