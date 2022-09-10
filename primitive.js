//primitive
//stored in a stack
//create a value of a copy
//not update realtime
//does not update simutanously
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`this is an ${scoreOne} and not ${scoreTwo}`);
scoreOne = 100;
console.log(`this is an ${scoreOne} and not ${scoreTwo}`);

//reference typy
// stored in a heap
//stored once with two pointer
//updated realtime and simutanously
//uses a pointer
const userOne = { fanName: "joe", fanAge: 20 };
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.fanAge = 60
console.log(userOne, userTwo);

