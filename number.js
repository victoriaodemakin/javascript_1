let radius = 10;
const pi = 3.14;

//maths operation

let mathResult = radius + 3; //add
console.log(mathResult);
let mathResult1 = radius - 3; //sub
console.log(mathResult1);
let mathResult2 = radius / 3; //div
console.log(mathResult2);
let mathResult3 = radius % 3; //remainder
console.log(mathResult3);
let mathResult4 = radius**2 * 3; //raise to power of 2
console.log(mathResult4);

let likes = 10;
likes++;
console.log(likes); //increment

let follow = 10;
follow*=2; //shortcut increment
console.log(follow);

let blogPost = 'the blog has' +' ' +likes + ' '+ 'likes'
+ ' ' + "and" + follow  + " "+ 'follow';
console.log(blogPost) //concentation way

let blogPost2 = `the blog has ${likes} likes and ${follow} follow`
console.log(blogPost2) //template string  way

let html = `
<h2> ${likes}</h2>
<p> and has ${follow} </p>
`
console.log(html);

