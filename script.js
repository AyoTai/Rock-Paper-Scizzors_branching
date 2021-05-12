var playerChoice = 'r';
var computerChoice = 'p';

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