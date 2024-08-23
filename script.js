let scissors = document.querySelector(".scissor");
let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let userInfo = document.getElementById("userInfo");
let cpuInfo = document.getElementById("cpuInfo");
let result = document.getElementById("result");
let pts = document.querySelector("#pkt");

let points = 0;

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
  let cpuCheck = Math.floor(Math.random() * 3);

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
  } else {
    result.innerHTML = "Przegrywasz :(";
    result.style.color = "red";
  }
}
