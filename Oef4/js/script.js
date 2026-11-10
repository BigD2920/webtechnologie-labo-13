let numberOne = parseInt(prompt("Geef het eerste getal:"));
let numberTwo = parseInt(prompt("Geef het tweede getal:"));
let operator = prompt("Geef de operator in:  +, -, * of /.");
switch (operator) {
  case "+":
    let sum = numberOne + numberTwo;
    console.log(`De som van ${numberOne} en ${numberTwo} is ${sum}.`);
    break;
  case "-":
    let difference = numberOne - numberTwo;
    console.log(
      `Het verschil van ${numberOne} en ${numberTwo} is ${difference}.`,
    );
    break;
  case "*":
    let product = numberOne * numberTwo;
    console.log(`Het product van ${numberOne} en ${numberTwo} is ${product}.`);
    break;
  case "/":
    if (numberTwo === 0) {
      console.log("Fout: delen door 0 is niet toegestaan.");
    } else {
      let division = numberOne / numberTwo;
      console.log(`De deling van ${numberOne} en ${numberTwo} is ${division}.`);
    }
    break;
  default:
    console.log("Fout: ongeldige operator. Gebruik alleen +, -, * of /.");
    break;
}
