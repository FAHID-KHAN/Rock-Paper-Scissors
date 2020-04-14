//rock paper scissors
function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botchoice;
  humanChoice = yourChoice.id;
  botchoice = numberToChoice(randToRpsint());
  console.log("Computer Choice", botchoice);
  results = decideWinner(humanChoice, botchoice);
  console.log(results);
  message = finalMessage(results);
  console.log(message);
  rpsFrontend(yourChoice.id, botchoice, message);
}

function randToRpsint() {
  return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
  return ["rock", "paper", "Scissors"][number];
}
function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { Scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, Scissors: 0 },
    Scissors: {
      paper: 1,
      Scissors: 0.5,
      rock: 0
    }
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];
  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore == 0) {
    return { message: "You lost", color: "red" };
  } else if (yourScore == 0.5) {
    return { message: "You tied!", color: "yellow" };
  } else {
    return { message: "You Won!", color: "green" };
  }
}
function rpsFrontend(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("Scissors").src
  };
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("Scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humanImageChoice] +
    " ' height = 150 width =150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>";
  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage["color"] +
    "; font-size:60px; padding:30px; '>" +
    finalMessage["message"] +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botImageChoice] +
    " ' height = 150 width =150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";
  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}
