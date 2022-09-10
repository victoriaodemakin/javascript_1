const myScore = [20, 50, 45, 0, 100, , 30, 70];
for (let i = 0; i < myScore.length; i++) {
  if (myScore[i] === 0) {
    continue;
  } 
  // it will ignore the rest of the code in the loop code block and goes back to theloop and iterate again by increasing one

  console.log("this is your", myScore[i]);

  if (myScore[i] === 100) {
    console.log("unbeatable, you win");
    break;
   } // it going to check the conditions and log out after it get to the break statment
  
}
