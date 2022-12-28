console.log("hello");
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(
  `...${data1[0]} celsius... ${data1[1]} celsius... ${data1[2]} celsius...`
);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} celsius ${i + 1} day ...`;
  }
  console.log("...", str);
};
printForecast(data1);
