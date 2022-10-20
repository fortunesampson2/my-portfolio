"use strict";

// function checkAnswer(){
//     let input = document.getElementbyId("input").value;
//     if(input == "b"){
//         Document.getElementbyId("output").innerHTML = "Correct! Well done";
//         Document.getElementbyId("output").style.color ="green";
//     }
//     else{
//         document.getElementbyId("output").innerHTML = "Wrong answer! Try again";
//         document.getElementbyId("output").style.color = "red";
//     }
// // }
// document.getElementById("lorem").style.display = "none";
// document.getElementById("close"). style.display = "none";

// function openBtn(){
//     document.getElementById("open").style.display = "none";
//     document.getElementById("close").style.display = "block";
//     document.getElementById("lorem").style.display = "block";
// }
// function closeBtn(){
//     document.getElementById("open").style.display = "block";
//     document.getElementById("close").style.display = "none";
//     document.getElementById("lorem").style.display = "none";
// }

// a global variable is a variable that can be accessed from anywhere in a java script program===
//a local 

// function addSum(){
//     let x = 5;
//     let y = 7;
//     let z = x + y;
//     console.log(z);
// }
// addSum();

// let firstname = "John";

// function username(){

//
//logical operators
//or- ||
// and - &&
// not - !!
// loops are used for reiterations and repititions

// while loop
//

// for(let i = 0; i < 5; i++){
//     console.log(i)
// }  
// let name = "John";
// let age = "40";
// let occupation = "Web developer";
// let car = "benz";

// let info = `My name is ${name}, I am ${age}, years old,
// I am a ${occupation},and i drive a ${car}`;
// document.getElementById("demo").innerHTML = info;
//String methods

// let text = "I am a good and bad ethical hacker";
// let size = text.length;
// console.log(size);

// let head = document.createElement("h1");

// let headContent = document.createTextNode("i am a heading");
// head.appendChild(headContent);


// let body = document.getElementById("body");

// body.appendChild(head);

// let para = document.createElement("p");
// let paraContent = document.createTextNode("I am a paragraph");
// para.appendChild(paraContent);
// body.appendChild(para)

// head.setAttribute("id", "demo");
// head.setAttribute("style", "background-color:yellow")

// para.setAttribute("class", "para");
// para.setAttribute("style", "border:1px solid black");

// let form = document.createElement("form");
// let body = document.getElementById("body")

// body.appendChild(form);

// let label = document.createElement("label");
// let labelContent = document.createTextNode("Full name");

// label.appendChild(labelContent);
// form.appendChild(label);

// let input = document.createElement("input");
// input.setAttribute("type", "text");

// form.appendChild(input);

// let label2 = document.createElement("label");
// let label2Content = document.createTextNode("password");

// label2.appendChild(label2Content);
// form.appendChild(label2);

// let input2 = document.createElement("input");
// input2.setAttribute("type", "password" );
// form.appendChild(input2);

// let button = document.createElement("input");
// button.setAttribute("type", "submit");
// button.setAttribute("value","SUBMIT");

// form.appendChild(button);

// let br = document.createElement("br");
// form.appendChild(br);

// form.insertBefore(br, label2)

// let br2 = document.createElement("br");
// form.appendChild(br2);

// form.insertBefore(br2, label2);
//three types of asychronous javascript
//CALLBACK
//PROMISE
//ASYNC/AWAIT

//to do app task

//place an order 2
//cut the fruit 2
// add water and ice 1
//start the machine 1
//select the container 2
// select toppings 3
// serve ice cream 2

//BACKEND

// let stocks = {
//     fruits: ["Strawberry", "Grapes", "Bananas", "Apple"],
//     liquid: ["Water", "Ice" ],
//     holder: ["cone", "cup", "plate"],
//     toppings: ["Chocolate", "Milk"]
// }
//A CALLBACK is when you nest a function inside another function as an argument;
//Order(fetch)
//Production(Process)

// let order = (fruitName, callProduction)=>{
//     setTimeout(function(){
// console.log(`${stocks.fruits[0]} was selected`);
// callProduction
//     }, 2000)
// }

// let production = ()=>{
//     setTimeout(()=>{
//         console.log("The fruit was cut");
//         setTimeout(()=>{
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
//         }, 1000)
//     }, 2000)
// }
// order(0,production)

// PROMISES
//pending
//resolve
//reject

//REAL LIFE CASE SCENARIO

// function myDisplay


// setTimeout(()=>{
//     let a = 5;
//     let b = 20;
//     let c = a + b;
//     console.log(c)
// }, 10000)

// let x = 60;
// let y = 88;
// let z = x + y;
// console.log(z)

// let firstName = "John";
// let lastName = "Thomas";
// let fullName = firstName + " " + lastName;
// console.log(fullName);







