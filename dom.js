// use the DOM when you want to do something with the web page
// you will first select the element you to add or remove from, than query it
// if you want to deal with a variable on the html page, you use the document object. the query selector select the class, or eleement you want to target

const para = document.querySelector("p"); //you target the document which is an object. it target the first p tag and ignore therest
console.log(para);
const paraOne = document.querySelector(".error"); //you target the document which is an object. it target the first class error and ignore therest
console.log(paraOne);
const paraTwo = document.querySelector("div.error"); //you target the document which is an object. it target the first a specfic div that has a class error tag and ignore therest
console.log(paraTwo);

const paraThree = document.querySelectorAll("p"); //you target the document which is an object. it target all  p tag in the document ans store them on a node list

paraThree.forEach(function (paragrap) {
  console.log(paragrap);
}); // for each element in the node list, log the parameters
console.log(paraThree[1]); // you can get the element in a node list and can use the for each cll back function

//get an element by ID
const title = document.getElementById("sub-title");
console.log(title);

//det element by class name
const newError = document.getElementsByClassName("error");
console.log(title); // they are stored as HTML collection which is like an array but can not use the for each function

//get element by tag name
const newPara = document.getElementsByTagName("p");
console.log(title);

const mainPara = document.querySelector("p");
console.log(mainPara.innerText);

// to upadte or change the inner text

mainPara.innerText = "learn DOM really well";

// change the text of all the p tag

const subPara = document.querySelectorAll("p"); // it has a node list so you can use a call back function
subPara.forEach(function (subParagraph) {
  console.log(subParagraph.innerText); //it cycle through all the p tag in the document and run the function
  subParagraph.innerText += "this is an update DOM class";
});

// changing an html

const subContent = document.querySelector(".content");
console.log(subContent.innerHTML);
subContent.innerHTML += "<h2> this is kind confusing</h2>"; //it completely overwrites the content in the content div

//array output

const mainContent = document.querySelector(".content");
let studentNames = ["shaun", "lola", "tife", "ayo", "kehinde", "ify"];

studentNames.forEach(function (student) {
  mainContent.innerHTML += `<p> all this students are taking ${student} taking the Dom class`;
});
// in the main content database we selected the div tag that contain some paragraph already. so we are saying for each student in the student name tag add to the inner html

//GET AND UPDATE ATTRIBUTE

const link = document.querySelector("a"); // get the refernce element. it takes the first a tag
console.log(link.getAttribute("href")); // you are geting the href attribute taht is associated with the a tag refrenced. it logs the value of the attribute

//To update or change an attribute

// it take two attribute, what you want to change and whart yoiu want to change it to

link.setAttribute("href", "https://www.netnaija.com"); // where href is an attribute
link.innerText = "this is the new site";

const errorMssg = document.querySelector(".error");
console.log(errorMssg.getAttribute("class")); // where class is the attribute
errorMssg.setAttribute("class", "success");
// it changing the value of the attribut and not the attribute itself . like itchanged the error class to success class
errorMssg.setAttribute("style", "color:red");

//STYLE ATTRIBUTE PROPERTIES
const headTitle = document.querySelector(".heading");
headTitle.setAttribute("style", "margin: 50px"); // if the set attribute is used for style it override the already given style
console.log(headTitle.style);
console.log(headTitle.style.color); // style here is used as a property. i.e

headTitle.style.color = "orange";
headTitle.style.fontSize = "3em";
// TO DELETE a style, just set it to an empty string. it remove to a default style

headTitle.style.color = "";

//ADD, REMOVE CLASS

const midContent = document.querySelector(".message");
console.log(midContent.classList); // it get a list of classes the midcontent has

//add
midContent.classList.add("error"); // the class error is added to the .message class
midContent.classList.remove("error-message");
midContent.classList.add("success-message");

const project = document.querySelectorAll("p");
project.forEach(function (replyMsg) {
  if (replyMsg.textContent.includes("error")) {
    replyMsg.classList.add("error-message");
  } //first target your reference
  //for each to iterate through the list
  //use conditional statement if the replymsg in the text content include error string
  //we used .textContent because it read all contnet even if display none is there
  else if (replyMsg.innerText.includes("success")) {
    replyMsg.classList.add("success-message");
  }
});

//TOGGLE CLASS
// IT IS USED TO TOGGLE A CLASS THAT IS NOT THERE AND ADD ANYONE

const mainHeading = document.querySelector(".heading");
mainHeading.classList.toggle("test"); //this will give the heading class another class of test. if test is called agin it will remove the class test
mainHeading.classList.toggle("test");
