let firstName = "BRANDON";
let lastName = "LAKE";
let fullName = firstName + " " + lastName;
console.log(fullName); //concatenation
console.log(fullName[0]); //getting characters

//methods involved in string
console.log(fullName.length); //getting length
console.log(fullName.toLowerCase());
let index = firstName.indexOf("N"); //getting the index or where they are in the sentence
console.log(index);

let result = firstName.lastIndexOf("N"); //getting the last index or where they are in the sentence
console.log(result);

let mainIndex = firstName.slice(0, 4); //allow you to slice the part you want. it takes in two argument it may from 0 to maybe
console.log(mainIndex);

let mainIndexs = firstName.replace("A", "V"); //allow you to slice the part you want. it takes in two argument it may from 0 to maybe
console.log(mainIndexs);

