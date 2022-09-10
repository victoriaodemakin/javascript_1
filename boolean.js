let email = "viki@gmail.com";
let newEmail = email.includes("@"); //allows you to check if the parameter is in the defined string
console.log(newEmail);

//camarison operator

let myAge = 25;
console.log(myAge == 25);
console.log(myAge != 25);
console.log(myAge > 25);
console.log(myAge < 25);
console.log(myAge <= 25);
console.log(myAge >= 25);

console.log(myAge === 25); //STRICT comaprsion

console.log(myAge === "25");
console.log(myAge !== 25);
console.log(myAge !== "25");

//type conversion

let score = "100";
score = Number(score); // it convert sting to numbers
console.log(score * 2);
console.log(typeof score) // it show the data type

let score2 = 100;
score = String(score2); // it convert sting to numbers
console.log(score2);

let score3 = 100;
score = Boolean(score3); // it convert sting to numbers
console.log(score3);