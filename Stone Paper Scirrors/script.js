let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


//  applying events  on UI

choices.forEach(choice => {
    choice.addEventListener("click", ()=>{
        // console.log("choices are clicked")
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
        // genCompChoice()
    })
    
});


// generating comp choices

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    // console.log(options[randIdx])
    return options[randIdx];

}

// winning condition


const playGame = (userChoice)=>{
    const compChoice = genCompChoice ()

    if(userChoice == compChoice){
        drawGame()
    }else{
        let userWin = true;
        if(userChoice == "rock"){
            // computer's choice -- paper /scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice == "paper"){
            // computer's choice -- rock /scissors
            userWin = compChoice === "scissors" ? false : true
        }else{
            userWin = compChoice === "rock" ? false : true

        }
        showWinner(userWin, userChoice, compChoice);
    }
}


// Draw game definition

const drawGame = ()=>{
    msg.innerText = "Game was Draw.... Play again.";
    msg.style.backgroundColor = "#081b31";
}


const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ...Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ...${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

