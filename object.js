//object literals
// object contains a key and it value, it is in curly brace {} and sperated by a comma. it has a property nd a method.

let newUser = {
  name: "blaine",
  age: 25,
  dateOf: 04 / 97,
  email: "blaine @gmail.net",
  location: "germany",
  blogs: [
    { title: "what a man want", likes: 50, repost: 30, dislike: 10 },
    { title: "what a man need", likes: 100, repost: 50, dislike: 0 },
    {
      title: "what so special about him",
      likes: 500,
      repost: 530,
      dislike: 300,
    },
  ],

  // an obeject can contain a function too as a value  to a key where you can create your own method
  login: function () {
    console.log(`welcome ${newUser.name}, you are now logged in`);
  }, //this is method cause it has a function. login is the method name so you can call it

  logout: function () {
    console.log(`goodbye ${newUser.name}, you are now logged out`);
  },
  logBlogs: function () {
    //THIS keyword is a context or block of code it is . it representthe context in which the current code is executed
    console.log(` ${newUser.name} has written this following blog post`);
    this.blogs.forEach(function (blog) {
      console.log(blog.title, blog.likes); //this.blog target just the blog key and for each uses a callback an access the array
    });
  },
};

console.log(newUser);
console.log(newUser.name); // access the name keyword and get the value only
console.log(newUser["email"]);

//change the value
newUser.name = "anthony"; // change the value of just name
console.log(newUser.name);
console.log(newUser.blogs);

newUser["email"] = "anthony@gmail.net";
console.log(newUser["email"]);

//to change with the value or acess a keyword you can use .notoation or []notation

// to accessthe diferenet properties. [] notaion is use ful in the case you have a variablee

const userKey = "location"; //which is an object in user

newUser.location = "united ameeica";
console.log(newUser.userKey); // it is going to give undefined because js will assume that the userKey is an an element in the object so it better to ue a [] notation
console.log(newUser[userKey]);

// METHODS IN OBJECT

const newName = "luwi";
newName.toUpperCase(); // defined on a string
console.log(newName);

//calling the login method

newUser.login(); //a regular function is defined in an object
newUser.logout();
newUser.logBlogs();

//storing an object in an array

//  MATH OBJECT iit is a built in object
console.log(Math);
console.log(Math.PI); // it is object that contain properties and method we can use
console.log(Math.E);

let area = 5.7;
console.log(Math.round(area)); // a math object method, it rounds up and down
console.log(Math.floor(area)); // it floor it to the main intger and round down irrespective of what is there
console.log(Math.ceil(area)); // it round up regardless
console.log(Math.trunc(area)); // it takes away the decimal and leave integer

//There is a method used to generate random numbers

const random = Math.random();
console.log(random); // this generate a random number anytime the browser is refreshed, it is between 0 and 1 that is decimal
console.log(Math.round(random * 100)); // round method rounds it up or down and you can multiply by 100 to create an integer
