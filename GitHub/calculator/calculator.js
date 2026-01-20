const resultElement = document.querySelector(".js-result");
resultElement.classList.add("show-context");
const resultElement2 = document.querySelector(".js-result2");
resultElement2.classList.add("show-context");

let calculation = localStorage.getItem("calculation") || "";

/*if( calculation === null ){
        calculation = '' ;
      }*/

console.log(localStorage.getItem("calculation"));

function updateCalculation(symbol) {
  if (symbol === 1) {
    calculation += "1";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === 2) {
    calculation += "2";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === 3) {
    calculation += "3";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === " + ") {
    calculation = calculation + " + ";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === 4) {
    calculation += "4";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === 5) {
    calculation += "5";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === 6) {
    calculation += "6";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === " - ") {
    calculation = calculation + " - ";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === 7) {
    calculation += "7";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === 8) {
    calculation += "8";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === 9) {
    calculation += "9";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === " * ") {
    calculation = calculation + " * ";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === 0) {
    calculation += "0";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === " . ") {
    calculation = calculation + " . ";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  } else if (symbol === "=") {
    calculation = eval(calculation);
    console.log(calculation);
    resultElement2.innerHTML = `${calculation}`;
  } else if (symbol === "/") {
    calculation = calculation + " / ";
    console.log(calculation);
    resultElement.innerHTML = `${calculation}`;
  }

  localStorage.setItem("calculation", calculation);
}
