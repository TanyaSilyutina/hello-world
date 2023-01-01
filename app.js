'use strict';
let userTalk;
let userName;

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
    //add loop
    //check for numbers and empty strings
    //make name capital
    if(userName == null || userName == ""){
        userName = prompt("Error: no name detected. Please enter your name:");
        return userName;
    } else {   
        return userName;
    }
}


