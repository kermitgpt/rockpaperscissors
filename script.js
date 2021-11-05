//VARIABLE DECLARATIONS
var wins = 0;
var losses = 0;
var ties = 0;

var userChoice = prompt("Please choose Rock, Paper, or Scissors");
console.log(userChoice);

//Array of rock = 0, paper = 1, scissors = 2
var computerOptions = ["Rock", "Paper", "Scissors"];
var randomNum = Math.floor(Math.random() * computerOptions.length);
var computerChoice = computerOptions[randomNum];

//FUNCTIONS
//For if statement, focus on if you win. Then focus on if the computer wins?
function startGame() {
  if (userChoice === computerChoice) {
    alert(
      `You chose ${userChoice}. The skilled computer gamer chose ${computerChoice}. Tie game!`
    );
    ties++;
    console.log("This was a tie");
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    console.log("You win!!");
    wins++;
    alert(
      `You chose ${userChoice}. The n00b computer gamer chose ${computerChoice}. You won this round!`
    );
  } else {
    console.log("The computer wins");
    losses++;
    alert(
      `You chose ${userChoice}. The pro-gamer computer chose ${computerChoice}. You lost this round!`
    );
  }

  confirm(`Wins: ${wins}  Losses: ${losses}  Ties: ${ties}`);

  confirm(`Want to play again?`);
  //Chooses a new computer choice
  computerOptions = ["Rock", "Paper", "Scissors"];
  randomNum = Math.floor(Math.random() * computerOptions.length);
  computerChoice = computerOptions[randomNum];

  //Promp to input userchoice again
  userChoice = prompt("Please choose Rock, Paper, or Scissors");

  //Starts game back up from beginning but keeps scoreboard running
  startGame();
}

startGame();

/* function startGame() {
  if (userChoice === computerChoice) {
    alert(
      `You chose ${userChoice}. The skilled computer chose ${computerChoice}. Tie game!`
    );
    ties++;
    console.log("This was a tie");
  } else if (userChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You win!!");
    wins++;
    alert(
      `You chose ${userChoice}. The n00b computer gamer chose ${computerChoice}. You won this round!`
    );
  } else if (userChoice === "Paper" && computerChoice === "Rock") {
    console.log("You win!!");
    wins++;
    alert(
      `You chose ${userChoice}. The n00b computer gamer chose ${computerChoice}. Computer wins this round!`
    );
  } else if (userChoice === "Scissors" && computerChoice === "Paper") {
    console.log(
      `You chose ${userChoice}. The n00b computer gamer chose ${computerChoice}. You won this round!`
    );
    wins++;
    alert(
      `You chose ${userChoice}. The n00b computer gamer chose ${computerChoice}. You won this round!`
    );
  } else {
    console.log("The computer wins");
    losses++;
    confirm(
      `You chose ${userChoice}. The pro-gamer computer chose ${computerChoice}. You lost this round!`
    );
  }

  confirm(`Wins: ${wins}  Losses: ${losses}  Ties: ${ties}`);

  confirm(`Want to play again?`);

  //Promp to input userchoice again
  //Chooses a new computer choice
  computerOptions = ["Rock", "Paper", "Scissors"];
  randomNum = Math.floor(Math.random() * computerOptions.length);
  computerChoice = computerOptions[randomNum];
  userChoice = prompt("Please choose Rock, Paper, or Scissors");

  //Starts game back up from beginning but keeps scoreboard running
  startGame();
} 
startGame(); */
