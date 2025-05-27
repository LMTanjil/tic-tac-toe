let userScore = 0;
let compScore = 0;

let winMsg = document.getElementById("win-msg")
const choices = document.querySelectorAll(".choice");


const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const ranOpt = Math.floor(Math.random()*3);
    return options[ranOpt];
}

const showWinner = (userWin) => {
    if(userWin) {
        winMsg.innerText = "Congratulation 🎉,You win!";
    }else{
        winMsg.innerText = "Computer win!,😞 You lose!";
    }
}

const drawGame = () => {
    winMsg.innerText = "Game was draw 🤝";
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log(compChoice,userChoice);
    
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? flase : true;
        }else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? flase : true;
        }else{
            userWin = compChoice === "rock" ? flase : true;
        }
    }
    showWinner(userWin);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    
})