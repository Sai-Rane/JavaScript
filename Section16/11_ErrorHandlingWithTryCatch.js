try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  //The catch block will have access to error of try block
  alert(err);
}
