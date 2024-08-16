let scissors = document.getElementById("scissor");
let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
let userInfo = document.getElementById("userInfo");
let cpuInfo = document.getElementById("cpuInfo");
let result = document.getElementById("result");

let userTurn = function () {
  scissors.addEventListener("click", () => {
    whoWin("nożyce".toUpperCase());
  });
  paper.addEventListener("click", () => {
    whoWin("papier".toUpperCase());
  });
  rock.addEventListener("click", () => {
    whoWin("kamień".toUpperCase());
  });
};

let cpuTurn = function () {
  cpuCheck = Math.floor(Math.random() * 3);

  switch (cpuCheck) {
    case 0:
      cpuInfo.innerHTML = "nożyce".toUpperCase();
      // cpuInfo.style.visibility = "hidden";
      break;
    case 1:
      cpuInfo.innerHTML = "papier".toUpperCase();
      // cpuInfo.style.visibility = "hidden";
      break;
    case 2:
      cpuInfo.innerHTML = "kamień".toUpperCase();
    // cpuInfo.style.visibility = "hidden";
  }
};

function whoWin(userChoice) {
  userInfo.innerHTML = userChoice;
  if (cpuCheck === userChoice) result.innerHTML = "REMIS!";
}
cpuTurn();
userTurn();
