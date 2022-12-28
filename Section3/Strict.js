// Write this String at the beginning of the script to enable Strict mode.
// And this line should be the very first line.Strict mode creates visible errors in the console which will we helpful for the developer
"use strict";
console.log("hello");
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("You can Drive");
