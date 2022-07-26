alert("Welcome to a Game where you play five rounds!");
let computerWin = 0;
let playerWin = 0;
const computerSelection = ["rock", "paper", "scissors"];
for (let i = 1; i <= 5; i++) {
  let answer = prompt(`Fill in Rock, Paper or Scissors please: `, `${i}`);
  if (answer === null || answer === undefined) {
    break;
  }
  let computerSelection = computerPlay();
  while (
    answer.length >= 5 &&
    answer.length <= 10 &&
    testinput(answer) === true
  ) {
    if (answer.toLowerCase() === computerSelection) {
      console.log(
        `The computer says ${computerSelection}, and you say ${answer}, you win, it's a draw!`
      );
      playerWin++;
      break;
    } else if (answer.toLowerCase() < computerSelection) {
      console.log(
        `The computer says ${computerSelection}, and you say ${answer}, the computer wins!`
      );
      computerWin++;
      break;
    } else if (answer.toLowerCase() > computerSelection) {
      console.log(
        `The computer says ${computerSelection}, and you say ${answer}, you win!`
      );
      playerWin++;
      break;
    }
  }
  if (answer.length < 5) {
    computerWin++;
    alert(
      `The computer says ${computerSelection}, and you say ${answer}, your input is not right, you lose this round!`
    );
  } else if (answer.length > 10) {
    computerWin++;
    alert(
      `The computer says ${computerSelection}, and you say ${answer}, your input is not right, you lose this round!`
    );
  }
}
function testinput(answer) {
  switch (answer) {
    case computerSelection[0]:
      return true;
    case computerSelection[1]:
      return true;
    case computerSelection[2]:
      return true;
  }
  return false;
}
function computerPlay() {
  return computerSelection[Math.floor(Math.random() * 3)];
}
if (playerWin > computerWin) {
  console.log(`In total you win with ${playerWin} to ${computerWin}`);
} else {
  console.log(`You lose with ${computerWin} to ${playerWin}`);
}
console.log("This is the end of the game!");
