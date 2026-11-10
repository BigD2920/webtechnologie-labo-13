let firstName = prompt("Wat is je voornaam?");
let lastName = prompt("Wat is je achternaam?");
let age = parseInt(prompt("Wat is je leeftijd?"));

if (firstName !== "" && lastName !== "") 
    {
  if (isNaN(age) || age < 12 || age > 60) {
    console.log("U behoort niet tot de gezochte leeftijdsklasse!");
  } else {
    console.log(`Welkom ${firstName} ${lastName}, je bent ${age} jaar oud.`);
  }
} 
else {
  console.log("Vul zowel voornaam als achternaam in!");
}