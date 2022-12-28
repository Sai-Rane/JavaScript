console.log("hello");
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degree Celsius")),
  };
  console.log("The measurement object", measurement);

  //Table prints the Object in tabular format
  console.table(measurement);

  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
