// Aftre creating index.js the first step is to initiate nodeJs application
// To do that, in terminal write- npm init -y
// this command will generate package.json folder
// Now we will install dependencies or libraries either by using npm i names_of_dependencies or yarn add names_of_dependencies, here we used are- yarn add express mongoose dotenv nodemon
// express which is node js framework acts as server

/*
firstly we are going to be using express it's going to be our node.js framework so we can create a rest api on our server and second one will be mongoose in this project we are going to be using mongodb so after that library we can create our collections documents and after that we can executecreating updating deleting or reading operations now we can write dotenv it's a library that we can hide our secret keys crucial values or other important stuff so nobody can reach them for example we are gonna be using stripe payment method it's gonna provide us a secret key for the identification if you don't hide this secret key everybody can create a payment operation and charge your users to prevent this we will be using this awesome library and after that finally we are going to be using nodemoon essentially it allows us to refresh our application for every changes otherwise whenever we make any changes we have to go to the terminal and right here start this application again and again  so basically it's a hot reload
*/

// console.log("hello nodemon");  // command to start application is node index.js, but if any change occur u need to again run the command therefore we will use nodemon which automatically refreshes up and display the new changes occur 
// To use nodemon do certain changes--- in package.json() > scrips > replace test with start and it's corresponding value to "nodemon mainFile" here mainFile is index.js..................NOW just write npm start or yarn start to start the server


// we can create our express server, i'm gonna say const express and it's gonna require my express library
const express = require('express');   

// okay we imported our express so how we are gonna use it it's really easy only thing you should do is writing here const app and express function that's all this is going to be our application
const app = express(); 


// but to run this application we should listen any number so i will say app dot listen i'm gonna provide a port numbe i will say for example 5000 and here callback function after running application it's gonna show for example back-end server is running as you can see
app.listen(5000, ()=>{
    console.log("backend server is running!")
});


