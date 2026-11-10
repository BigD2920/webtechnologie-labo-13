let numberOne = parseInt(prompt("Geef het eerste getal:"));
let numberTwo = parseInt(prompt("Geef het tweede getal:"));
let operator = prompt("Geef de operator in:  +, -, * of /.");

if (
  operator !== "+" &&
  operator !== "-" &&
  operator !== "*" &&
  operator !== "/"
) {
  console.log("Fout: ongeldige operator. Gebruik alleen +, -, * of /.");
} else {
  if (operator === "/" && numberTwo === 0) {
    console.log("Fout: delen door 0 is niet toegestaan.");
  } else if (operator === "+") {
    let sum = numberOne + numberTwo;
    console.log(`De som van ${numberOne} en ${numberTwo} is ${sum}.`);
  } else if (operator === "-") {
    let difference = numberOne - numberTwo;
    console.log(`Het verschil van ${numberOne} en ${numberTwo} is ${difference}.`);
  } else if (operator === "*") {
    let product = numberOne * numberTwo;
    console.log(`Het product van ${numberOne} en ${numberTwo} is ${product}.`);
  } else if (operator === "/") {
    let division = numberOne / numberTwo;
    console.log(`De deling van ${numberOne} en ${numberTwo} is ${division}.`);
  }
}