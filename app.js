'use strict';
let userTalk;
let userName;
let rating;

userTalk = loveCatsCheck();
console.log(userTalk);

if (userTalk == "yes" || userTalk == "ok" || userTalk == "okay") {
    alert("We love cats too!");
    let userName = askName();
    console.log(userName);
    document.write(userName + ", fellow cat lover, my cats are excited to have you here! WELCOME!");
} else {
    let userInput = confirm("Hmm, looks like your response wasn't the exact yes. Would you like to proceed to my cats' page?");
    console.log(userInput);
    if (userInput == false){
        alert("No worries, cats are not for everyone! The dogs' website will open next, learn about dogs instead!");
        location.href = 'https://www.dogster.com/';
    } else if(userInput == true){
        alert("My cats are excited to meet you!");
        userName = askName();
        console.log(userName);
        document.write(userName + ", welcome!");
    }
} 


function loveCatsCheck(){
    userTalk = prompt("Do you like cats?");
    userTalk = userTalk.toLowerCase();
    console.log(userTalk);
    return userTalk;
}

function askName(){
    userName = prompt("What is your name?");

    //check for numbers and space filled strings
    //make name capital

    while(!userName){
        userName = prompt("Error: no name detected. Please enter your name:");
    }
    return userName;
}

function rateCats(){
    rating = prompt("On the scale of 0 - 10, how much did you like interacting with my website?");
    console.log(rating);
    while(rating > 10 || rating < 0){
        rating = prompt("Error. Please pick the number from 0 to 10: ");    
    }

    for(let i = 0; i < rating; i++){
        document.write("<img style='width:200px;' src='photos/nataliebag.jpg' alt='funny cat picture' />");
    }
}


