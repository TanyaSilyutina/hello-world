let userTalk = prompt("Do you like cats?");
userTalk = userTalk.toLowerCase();
console.log(userTalk);

if (userTalk == "yes") {
    let userName = prompt("We love cats too! What is your name?");
    console.log(userName);
    document.write(userName + ", fellow cat lover, my cats are excited to have you here! WELCOME!");
} else {
    let userInput = confirm("Hmm, looks like your response wasn't the exact yes. Would you like to proceed to my cats' page?");
    console.log(userInput);
    if (userInput == false){
        alert("No worries, cats are not for everyone! The dogs' website will open next, learn about dogs instead!");
        location.href = 'https://www.dogster.com/';
    } else if(userInput == true){
        let userName = prompt("My cats are excited to meet you! What is your name?");
        console.log(userName);
        // make the name letter capital
        document.write(userName + ", Welcome!");
    }
} 