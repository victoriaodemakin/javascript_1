let password = "Adedayomi@97";
if (password.length >= 12) {
  console.log("your password is strong");
} else if (password.length >= 8) {
  console.log("your password is not strong");
} else {
  console.log("your password is weak");
}

//logical operator
let myPassword = "Adedayomi@971";
if (myPassword.length >= 12 && myPassword.includes("_","@","/","~")) {
  console.log("your password is strong");
} else if (myPassword.length >= 8 || myPassword.includes('@')) {
  console.log("your password is not strong");
} else {
  console.log("your password is weak");


}
//logical Not

let user = false;
