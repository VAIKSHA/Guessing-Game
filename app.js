const max = prompt("Enter the Maximum number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the number");
while(true){
    if(guess == "quit"){
        console.log("You quit the game");
        break;
    }
    else if(guess == random){
        console.log("Congrats!! Your guess is correct. the number is ", random);
        break;
    }
    else if(guess < random){
        guess = prompt("Hint: Your number is too small. Try again");
    }
    else if(guess > random){
        guess = prompt("Hint: Your number is too large. Try again");
    }
}