"use strict";

const myList = ["rock", "paper", "scissors"];
let playerSelection = prompt(
  "Please write rock, paper or scissors"
).toLocaleLowerCase();
let computerSelection = myList[(Math.random() * myList.length) | 0];
let playerWinCount = 0;
let computerWinCount = 0;
let roundResult = 0;

console.log("You chose " + playerSelection);
console.log("The computer chose " + computerSelection);
console.log("New round");
playRound(playerSelection, computerSelection);
game();

function computerPlay() {
  let computerTurn = myList[(Math.random() * myList.length) | 0];
  console.log(computerTurn);
  computerSelection = computerPlay();
  playerSelection = prompt(
    "Please write rock, paper or scissors"
  ).toLowerCase();
  let roundResult;
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  //playerSelection rock

  if (playerSelection === "rock" && computerSelection === "rock") {
    alert("It's a tie");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert("You lose! Paper beats rock");
    computerWinCount++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert("You win! Rock beats scissors");
    playerWinCount++;
  }
  //playerSelection paper
  else if (playerSelection === "paper" && computerSelection === "paper") {
    alert("It's a tie");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    alert("You lose! scissors beats paper");
    computerWinCount++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert("You win! Paper beats rock");
    playerWinCount++;
  }
  //playerSelection scissors
  else if (playerSelection === "scissors" && computerSelection === "scissors") {
    alert("It's a tie");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    alert("You lose! Rock beats scissors");
    computerWinCount++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert("You win! Scissors beats paper");
    playerWinCount++;
  }
  return roundResult;
}
console.log("You have won " + playerWinCount + " rounds");
console.log("The computer has won " + computerWinCount + " rounds");

function game() {
  for (let i = 1; i < 5; i++) {
    playerSelection = prompt(
      "Please write rock, paper or scissors"
    ).toLowerCase();
    computerSelection = myList[(Math.random() * myList.length) | 0];
    playRound(playerSelection, computerSelection);
    console.log("You chose " + playerSelection);
    console.log("The computer chose " + computerSelection);
    console.log("Play again");
    console.log(playerWinCount);
    console.log(computerWinCount);
  }
  playRound();
  if (playerWinCount > computerWinCount) {
    alert(
      `You won ${playerWinCount} rounds and the computer won ${computerWinCount} You won`
    );
  } else {
    alert(
      `The computer won ${computerWinCount} rounds and you won ${playerWinCount} rounds. You lost`
    );
  }
}
