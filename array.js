let names = ['shaun','lola', 'tife']; //array are stored in a square bracket
console.log(names);

let newNames = ['shaun','lola', 'tife']; //this will get the inex in the list and bring it out
console.log(newNames[1]);

let replacNames = ['shaun','lola', 'tife']; //replace an iten in an array 
replacNames[1] = 'ken'
console.log(replacNames);

//properties
let oldNames = ['shaun','lola', 'tife','ayo','kehinde','ify'];  

console.log(oldNames.length); //get length

let allNames = oldNames.join("*"); // add thr element in between all
console.log(allNames);

 let indexNames = oldNames.indexOf('tife'); // allows you to get the index of the item
console.log(indexNames);

let brandNames = oldNames.concat('prince','giddy'); // allows you to join another array to an originakl aray. it joins 2 array together
console.log(brandNames);

let valueName = oldNames.push('oluwadamola'); // it pushes a new item and increases the length by the amount of pushed item
console.log(valueName)

valueName = oldNames.pop('oluwadamola'); //it pop off the last added item in the array and returns it
console.log(valueName)
