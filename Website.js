let PlayerScore = 0;
let ComputerScore = 0;
const options = ["rock", "paper", "scissors"];

function CompTurn() {
  let Index = Math.floor(Math.random() * 3);
  console.log("computer", Index);
  console.log("random number", Math.floor(Math.random() * 3));
  return options[Index];
}

const output = document.querySelector(".output");
const selection = document.querySelector(".selection");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", function (e) {
  console.log("click");
  let playerSelection = e.target.dataset.choice;
  let computerSelection = CompTurn();
  playRound(playerSelection, computerSelection);
});

paper.addEventListener("click", function (e) {
  console.log("click");
  let playerSelection = e.target.dataset.choice;
  let computerSelection = CompTurn();
  playRound(playerSelection, computerSelection);
});

scissors.addEventListener("click", function (e) {
  console.log("click");
  let playerSelection = e.target.dataset.choice;
  let computerSelection = CompTurn();
  playRound(playerSelection, computerSelection);
});

function playRound(playerSelection, computerSelection) {
  console.log("Computer Selection", computerSelection);
  console.log("Computer Selection", playerSelection);
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    ComputerScore++;
    result.textContent = "I WON THIS ROUND";
    console.log("Win");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    PlayerScore++;
    result.textContent = "I LOST THIS ROUND (good game I guess....)";
    console.log("Lose");
  } else {
    result.textContent = "It appears we have tied";
    console.log("Tie");
  }
  if (PlayerScore === 5 || ComputerScore === 5) {
    GameOver();
  }
}

function GameOver() {
  if (PlayerScore > ComputerScore) {
    output.textContent = "GOOD GAME BRO (you won btw)";
  } else {
    output.textContent = "What did u expect, IM A COMPUTER, I ALWAYS WIN";
  }
}

function resetGame() {
  location.reload();
}
