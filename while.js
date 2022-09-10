let i = 0; // in while loop you must intializw what i is to avoid infinte loop
 while(i< 5){
console.log('in the loop' , i)
i++ // the final statement is kept in the code block so as to loop
 } //only the conditional statment is placed in the method o

 const databaseNames = [
  "shaun",
  "lola",
  "tife",
  "ayo",
  "ify",
  "geroge",
  "sheldon",
  "lenoard",
];
let j =0;
while(j< databaseNames.length){
 console.log(`this is  ${databaseNames[j]}'s bag`)
 j++
}


// DO WHILE LOOP ***********************************************

let m = 4;
do{
 console.log('val of m', m); // it performs what is in the code block regardless of if the while conditional statment is meet 
 m++
}
while (m < 5);