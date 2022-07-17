const playGame = ["rock", "paper", "scissors"];
let playerSelection = prompt(
  "feel free to choose one of these: rock, paper or scissors"
).toLocaleLowerCase();
let computerSelection = playGame[(Math.random() * playGame.length) | 0];
let playerWinCount = 0;
let computerWinCount = 0;
let roundResult = 0;
console.log("You chose " + playerSelection);
console.log("The computer chose " + computerSelection);
 console.log("Play again please");

function computerPlay() {
  let computerChoose = playGame[(Math.random() * playGame.length) | 0];
  console.log(computerChoose);
  
}

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === "rock" && computerSelection === "rock") {
    alert("It's a tie");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You lose! Paper beats rock");
    computerWinCount++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You win! Rock beats scissors");
    playerWinCount++;
  }

  else if (playerSelection === "paper" && computerSelection === "paper") {
  
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    
    computerWinCount++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    
    playerWinCount++;
  }

  else if (playerSelection === "scissors" && computerSelection === "scissors") {
    
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    
    computerWinCount++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    
    playerWinCount++;
  }
  return roundResult;
}
console.log("You have won " + playerWinCount);
console.log("The computer has lost " + computerWinCount);

function game() {
  for (let i = 1; i < 5; i++) {
    playerSelection = prompt(
      "Please write rock, paper or scissors"
    ).toLocaleLowerCase();
    computerSelection = playGame[(Math.random() * playGame.length) | 0];
    playRound(playerSelection, computerSelection);
    console.log("You chose " + playerSelection);
    console.log("The computer chose " + computerSelection);
    console.log("another round");
    console.log(playerWinCount);
    console.log(computerWinCount);
  }
}
