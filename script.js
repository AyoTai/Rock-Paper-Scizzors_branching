var play = confirm("Would you like to play Rock Paper Scissors");

console.log(play);

var playerChoice = prompt("For ROCK: r, For SCISSOR: s, For Paper: p");

var choices = ['p', 'r', 's'];
var computerChoice = choices[Math.floor(Math.random()*3)];
console.log("playerchoice " + playerChoice);
console.log("computerchoice " + computerChoice);




if(playerChoice === 'r'){

    if(computerChoice === 'r'){
        console.log("Draw");
    }else if(computerChoice === 'p'){
        console.log("loss");
    }else if(computerChoice === 's'){
        console.log("win");
    }

}else if(playerChoice === 'p'){

    if(computerChoice === 'r'){
        console.log("win");
    }else if(computerChoice === 'p'){
        console.log("Draw");
    }else if(computerChoice === 's'){
        console.log("loss");
    }

}else if(playerChoice === 's'){

    if(computerChoice === 'r'){
        console.log("loss");
    }else if(computerChoice === 'p'){
        console.log("win");
    }else if(computerChoice === 's'){
        console.log("Draw");
    }

}