let scissors = document.querySelector(".scissor");
let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let userInfo = document.getElementById("userInfo");
let cpuInfo = document.getElementById("cpuInfo");
let result = document.getElementById("result");
let pts = document.querySelector(".pkt");

let btn = document.querySelector(".btn");

let points = 0;
let win = new Audio("./play/win.wav");
let lose = new Audio("./play/lose.wav");

scissors.addEventListener("click", () => {
  whoWin("nożyce".toUpperCase());
});
paper.addEventListener("click", () => {
  whoWin("papier".toUpperCase());
});
rock.addEventListener("click", () => {
  whoWin("kamień".toUpperCase());
});

let cpuTurn = function () {
  let cpuCheck = Math.ceil(Math.random() * 3);
  console.log(cpuCheck);

  switch (cpuCheck) {
    case 1:
      cpuInfo.innerHTML = "nożyce".toUpperCase();
      // cpuInfo.style.visibility = "hidden";
      break;
    case 2:
      cpuInfo.innerHTML = "papier".toUpperCase();
      // cpuInfo.style.visibility = "hidden";
      break;
    case 3:
      cpuInfo.innerHTML = "kamień".toUpperCase();
    // cpuInfo.style.visibility = "hidden";
  }
};

function whoWin(userChoice) {
  userInfo.innerHTML = userChoice;
  cpuTurn();
  if (userChoice === cpuInfo.innerHTML) {
    result.innerHTML = "REMIS!";
    result.style.color = "orange";
  } else if (
    (userChoice === "NOŻYCE" && cpuInfo.innerHTML === "PAPIER") ||
    (userChoice === "PAPIER" && cpuInfo.innerHTML === "KAMIEŃ") ||
    (userChoice === "KAMIEŃ" && cpuInfo.innerHTML === "NOŻYCE")
  ) {
    result.innerHTML = "Wygrywasz!";
    result.style.color = "green";
    points++;
    pts.innerHTML = points;
    win.play();
  } else {
    result.innerHTML = "Przegrywasz :(";
    result.style.color = "red";
    points--;
    pts.innerHTML = points;
    lose.play();
  }
  if (pts < 0) {
    pts.style.color = "red";
  }
}
btn.addEventListener("click", () => {
  result.innerHTML = "";
  points = 0;
  pts.innerHTML = points;
  pts.style.color = "";
  cpuInfo.innerHTML = "";
  userInfo.innerHTML = "";
});
