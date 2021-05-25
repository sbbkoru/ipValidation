"use strict";

const ipValidation = (ipv4) => {
  const arr1 = ipv4?.split(".");
  const result =
    arr1.length === 4 &&
    arr1.every(
      (num) =>
        !isNaN(num) &&
        Number(num) <= 255 &&
        0 < Number(num) &&
        num.charAt(0) !== "0"
    )
      ? true
      : false;
  return result;
};

console.log(ipValidation("1.2.3"));
console.log(ipValidation("1.2.3.4.5"));
console.log(ipValidation("123.56.78.90"));
console.log(ipValidation("123.045.067.089"));
console.log(ipValidation("01.02.03.04"));
console.log(ipValidation("123.111.222.65"));
console.log(ipValidation("12.34.56. -1"));
console.log(ipValidation(""));
