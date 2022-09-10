for (let i = 0; i < 5; i++) {
  console.log("in this loop", i);
}
console.log("loop finished");

const dataNames = [
  "shaun",
  "lola",
  "tife",
  "ayo",
  "ify",
  "geroge",
  "sheldon",
  "lenoard",
];

for (i = 0; i < dataNames.length; i++) {
  let newhtml = `<div> ${dataNames[i]} </div>`;
  console.log(newhtml);
  console.log(dataNames[i]);
}
