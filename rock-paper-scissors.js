let score = JSON.parse(localStorage.getItem("score")) || {
    Wins: 0,
    Losses: 0,
    Ties: 0,
  };
   updateScore();
function playerChoice(playerMove) {
    const computerMoves = pickComputerMove();
    let result = "";
    if (playerMove === "scissors") {
      if (computerMoves === "rock") {
        result = "You lose.";
      } else if (computerMoves === "paper") {
        result = "You win.";
      } else if (computerMoves === "scissors") {
        result = "Tie.";
      }
    } else if (playerMove === "paper") {
      if (computerMoves === "rock") {
        result = "You win.";
      } else if (computerMoves === "paper") {
        result = "Tie.";
      } else if (computerMoves === "scissors") {
        result = " You lose.";
      }
    } else if (playerMove === "rock") {
      if (computerMoves === "rock") {
        result = "Tie.";
      } else if (computerMoves === "paper") {
        result = "You lose.";
      } else if (computerMoves === "scissors") {
        result = " You win.";
      }
    }
      //adding result
    if (result === "You win.") {
      score.Wins += 1;
    } else if (result === "You lose.") {
      score.Losses += 1;
    } else if (result === "Tie.") {
      score.Ties += 1;
    }
    //displays result on dom
  document.querySelector('.js-result')
    .innerHTML = result;
  
    // displays moves on dom
  document.querySelector('.js-moves')
    .innerHTML = `you 
            <img src="img/${playerMove}-emoji.png" alt="" class="image-view">
            <img src="img/${computerMoves}-emoji.png" alt="" class="image-view">
            computer`
  
    localStorage.setItem("score", JSON.stringify(score));
    updateScore();
  
  }
  //display scores on dom
  function updateScore(){
    document.querySelector('.js-scoreBoard').
    innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Tie: ${score.Ties}`
  }
  //computer moves
  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMoves = "";
  
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMoves = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMoves = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMoves = "scissors";
    }
    return computerMoves;
  }