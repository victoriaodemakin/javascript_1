function greet() {
  console.log("greet them hello"); //code block, it will not run unless the function is called
}

greet(); //function called

///function expression

const speak = function () {
  console.log("dont speak"); //this is called a function expresssion. it whereby the function is passed into a variablr. the function takes the nae of the variable
};
speak();

//arguments and parameters
const speak2 = function (name, year) {
  console.log(`don's speak by ${name} in the ${year}`); // function can take in parameters and have argument kept in when they are called. and it limited to just the scope of the code block
};
speak2("gwen", "1997");

//default parameters and arguments
const speak3 = function (name = "no doubt", year = "1996") {
  console.log(`don's speak by ${name} in the ${year}`); // you can put default value in the parameter so that when the function is called without an argument put it takes the default parameter
};
speak3();
speak3("gwen", "1997");

//
const calcArea = function (radius) {
  let area = 3.14 * radius ** 2;
  return area; //return a value
};
let areaResult = calcArea(10); // storing the funtion in a variable allows it to be gobally access that means you can use the function in another function
console.log(areaResult);

//Arrow function

const calcArea2 = (radius) => {
  // it allows you to remove the function keyword and replace it with an arrow
  let area = 3.14 * radius ** 2;
  return area; // arrow allows you to remove the function keyword
};
let areaResult2 = calcArea2(10); // storing the funtion in a variable allows it to be gobally access that means you can use the function in another function
console.log(`this is the ${areaResult2}`);

const greetMe = function () {
  return "good moring";
};

const mainGreet = greetMe();
console.log(mainGreet);

const greetMe2 = () => {
  return "good moring"; //changing to arrow function
};
greetMe2();

let product = [10, 15, 30];
let products = [10, 15, 30];
let tax = 0.2;

const bill = function (products, tax) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[1] * tax;
  }
  return total; //iterate through the length and store the answer in total and add total to the maimn produt
};

const totalBill = bill([10, 15, 30], 0.2);
console.log(totalBill);

const bill2 = (product, tax) => {
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    total += product[i] + product[1] * tax;
  }
  return total;
};
const totalBill2 = bill2([10, 15, 30], 0.2);
console.log(totalBill2);

//method is invoked using a dot notatation

let ourName = "oluwadamilore";
let nameResult = ourName.toUpperCase();
console.log(nameResult);

//CALL BACK FUNCTION
// it is the process of passing a function into a pfunction as an argument

const myFunc = (callbackFunc) => {
  //the function name os myFun and a parameter of callbackFun is passed
  let value = 50;
  callbackFunc(value); // an argument value( which is a function on it's own) is pass into the agrument  callbackFun when it is called
};

myFunc(function (value) {
  console.log(value);
}); //myFunc function is called back but it contains another function with parameter value

//for each

let myPeople = ["wole", "wale", "bisi", "wunmi", "dele"]; // for each iterate through an array and invocke the function for each element in the array and does the process again
myPeople.forEach((person, index) => {
  console.log(index, person);
});

let people = ["wole", "wale", "bisi", "wunmi", "dele"]; // for each iterate through an array and invocke the function for each element in the array and does the process again
const logPerson = (person, index) => {
  console.log(`${index} - hello you are welcome ${person}`);
};

people.forEach(logPerson); //it will check the people array and iterate through eac element

const mates = document.querySelector(".humans");
const classPeople = ["wole", "wale", "bisi", "wunmi", "dele"];

let mainHtml = ``; //mainHtml is an empty template string 

classPeople.forEach(function (person) {
  mainHtml += `<li style="color: purple">${person}</li>`; // mainthml will take each iteration and add it to the  a stored database that is mainhtml
});

console.log(mainHtml);
mates.innerHTML = mainHtml;
