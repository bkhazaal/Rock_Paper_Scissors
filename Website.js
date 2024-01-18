let PlayerScore = 0;
let ComputerScore = 0;
const options = ["rock", "paper", "scissors"];

function CompTurn() {
  let Index = Math.floor(Math.random() * 3);
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
  let playerSelection = "rock";
  let computerSelection = CompTurn();
  playRound(playerSelection, computerSelection);
  displayPlayerAndComputerSelection(playerSelection);
});

paper.addEventListener("click", function (e) {
  let playerSelection = "paper";
  let computerSelection = CompTurn();
  playRound(playerSelection, computerSelection);
  displayPlayerAndComputerSelection(playerSelection);
});

scissors.addEventListener("click", function (e) {
  let playerSelection = "scissors";
  let computerSelection = CompTurn();
  playRound(playerSelection, computerSelection);
  displayPlayerAndComputerSelection(playerSelection);
});

function playRound(playerSelection, computerSelection) {
  console.log("Player Selection:", playerSelection);
  console.log("Computer Selection:", computerSelection);
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    ComputerScore++;
    result.textContent = "I WON THIS ROUND";
    score.textContent = `${PlayerScore} | ${ComputerScore}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    PlayerScore++;
    result.textContent = "YOU WON THIS ROUND";
    score.textContent = `${PlayerScore} | ${ComputerScore}`;
  } else {
    result.textContent = "WE TIED THIS ROUND";
    score.textContent = `${PlayerScore} | ${ComputerScore}`;
  }
  if (PlayerScore === 5 || ComputerScore === 5) {
    GameOver();
    PlayerScore = 0;
    ComputerScore = 0;
  }
}

function GameOver() {
  if (PlayerScore > ComputerScore) {
    result.textContent = "YOU WON BEST OUTTA 5";
  } else {
    result.textContent = "I WON BEST OUTTA 5";
  }
}
function displayPlayerAndComputerSelection(playerSelection) {
  let computerSelection = CompTurn();

  console.log("Player Score", PlayerScore);
  console.log("Computer Score", ComputerScore);
}

function resetGame() {
  location.reload();
}
