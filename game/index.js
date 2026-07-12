let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const getcompChoice = () => {
    let options = ["rock", "paper","scissor"];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum]
    // switch(randomNum) {
    //     case 0 :
    //         return "rock";
    //     case 1 :
    //         return "paper";
    //     case 2: 
    //         return "scicssors";
    // }
}

const gameWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("User Wins");
        userScore++;
        const userScorePanel = document.querySelector("#user-score");
        userScorePanel.innerText = userScore;
        msgpanel.innerText = `You won! ${userChoice} beats ${compChoice}`;
        msgpanel.style.backgroundColor = "green";
    }
    else {
        console.log("Computer Wins");
        compScore++;
        const compScorePanel = document.querySelector("#comp-score")
        compScorePanel.innerText = compScore;
        msgpanel.innerText = `Computer won! ${compChoice} beats your ${userChoice}`;
        msgpanel.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice:", userChoice);
    // computer choice
    const compChoice = getcompChoice();
    console.log("Computer choice:", compChoice);

    if (userChoice === compChoice) {
        console.log("Game is a tie");
        msgpanel.innerText = "Game is a tie";
        msgpanel.style.backgroundColor = "rgb(160, 176, 160)";
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper, scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        gameWinner(userWin, userChoice, compChoice);
    }
    // if (userChoice === compChoice){
    //     console.log("Game is a tie");
    // }
    // else {
    //     if (userChoice === "rock" && compChoice === "scissor") {
    //         console.log("UserWins");
    //         userScore++;
    //     }
    //     else if (userChoice ==="paper" && compChoice ==="rock") {
    //         console.log("Userwins");
    //         userScore++;
    //     }
    //     else if (userChoice ==="scissor" && compChoice ==="paper") {
    //         console.log("Userwins");
    //         userScore++;
    //     }
    //     else {
    //         console.log("Computer Wins")
    //         compScore++;
    //     }
    // }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Button was clicked:", userChoice);
        // console.log("Button was clicked", choice.id);
        playGame(userChoice);
    })
})

const msgpanel = document.querySelector("#msg");
