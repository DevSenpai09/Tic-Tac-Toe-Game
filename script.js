let tiles = document.getElementsByClassName("tile");
tiles = [...tiles];
let xIcons = document.getElementsByClassName("x_tile");
xIcons = [...xIcons];
let oIcons = document.getElementsByClassName("o_tile");
oIcons = [...oIcons];
let markTurns = document.getElementsByClassName("mark_turn");
markTurns = [...markTurns];
let showScores = document.getElementsByClassName("show_score");
showScores = [...showScores];
const landingPage = document.getElementById("landing_page");
const gamePage = document.getElementById("game_page");
const xMark = document.getElementById("x_mark");
const xMarkIcon = document.getElementById("x_mark_icon");
const oMark = document.getElementById("o_mark");
const oMarkIcon = document.getElementById("o_mark_icon");
let xScore = 0;
let oScore = 0;
let tieScore = 0;
const resultPage = document.getElementById("result_con");
const xResult = document.getElementById("x_result");
const oResult = document.getElementById("o_result");
const resultText = document.getElementById("result_text");
const resultIcon = document.getElementById("result_icon");
const resultHeading = document.getElementById("result_heading");
let playerOne = "x";
let playerTwo = {
  mark: "o",
  playerType: "",
};
let playerTurn = "x";
let gameTiles = {};
for (let i = 1; i <= 9; i += 1) {
  gameTiles[`tile${i}`] = "";
}
let tilesFilled = 0;
let result = "";

let playerMark = (mark) => {
  if (mark == "x") {
    xMark.style.backgroundColor = "#a8bec9";
    xMarkIcon.style.fill = "#192a32";
    oMark.style.backgroundColor = "#192a32";
    oMarkIcon.style.fill = "#a8bec9";
    playerOne = mark;
    playerTwo.mark = "o";
  } else {
    xMark.style.backgroundColor = "#192a32";
    xMarkIcon.style.fill = "#a8bec9";
    oMark.style.backgroundColor = "#a8bec9";
    oMarkIcon.style.fill = "#192a32";
    playerOne = mark;
    playerTwo.mark = "x";
  }
};

let playerTwoType = (type) => {
  if (type == "cpu") {
    playerTwo.playerType = type;
  } else {
    playerTwo.playerType = type;
  }
  gameMode();
  landingPage.style.display = "none";
  gamePage.style.display = "grid";
};

let gameMode = () => {
  if (playerTwo["playerType"] == "cpu") {
  } else {
    tile = tiles.map((tile) => {
      tile.addEventListener("click", () => {
        if (gameTiles[`tile${tiles.indexOf(tile) + 1}`] == "") {
          if (playerTurn == "x") {
            xIcons[tiles.indexOf(tile)].classList.add("on");
            gameTiles[`tile${tiles.indexOf(tile) + 1}`] = "x";
            markTurns[0].classList.add("off");
            markTurns[1].classList.remove("off");
            playerTurn = "o";
          } else {
            oIcons[tiles.indexOf(tile)].classList.add("on");
            gameTiles[`tile${tiles.indexOf(tile) + 1}`] = "o";
            markTurns[0].classList.remove("off");
            markTurns[1].classList.add("off");
            playerTurn = "x";
          }
        }
        if (tilesFilled < 9) {
          tilesFilled += 1;
        }
        checkGame();
      });
    });
  }
};

let checkGame = () => {
  if (
    (gameTiles["tile1"] == "x" &&
      gameTiles["tile4"] == "x" &&
      gameTiles["tile7"] == "x") ||
    (gameTiles["tile1"] == "x" &&
      gameTiles["tile2"] == "x" &&
      gameTiles["tile3"] == "x") ||
    (gameTiles["tile3"] == "x" &&
      gameTiles["tile6"] == "x" &&
      gameTiles["tile9"] == "x") ||
    (gameTiles["tile7"] == "x" &&
      gameTiles["tile8"] == "x" &&
      gameTiles["tile9"] == "x") ||
    (gameTiles["tile2"] == "x" &&
      gameTiles["tile5"] == "x" &&
      gameTiles["tile8"] == "x") ||
    (gameTiles["tile4"] == "x" &&
      gameTiles["tile5"] == "x" &&
      gameTiles["tile6"] == "x") ||
    (gameTiles["tile1"] == "x" &&
      gameTiles["tile5"] == "x" &&
      gameTiles["tile9"] == "x") ||
    (gameTiles["tile3"] == "x" &&
      gameTiles["tile5"] == "x" &&
      gameTiles["tile7"] == "x")
  ) {
    result = "x win";
    showResult("x");
    addScore("x");
  }
  if (
    (gameTiles["tile1"] == "o" &&
      gameTiles["tile4"] == "o" &&
      gameTiles["tile7"] == "o") ||
    (gameTiles["tile1"] == "o" &&
      gameTiles["tile2"] == "o" &&
      gameTiles["tile3"] == "o") ||
    (gameTiles["tile3"] == "o" &&
      gameTiles["tile6"] == "o" &&
      gameTiles["tile9"] == "o") ||
    (gameTiles["tile7"] == "o" &&
      gameTiles["tile8"] == "o" &&
      gameTiles["tile9"] == "o") ||
    (gameTiles["tile2"] == "o" &&
      gameTiles["tile5"] == "o" &&
      gameTiles["tile8"] == "o") ||
    (gameTiles["tile4"] == "o" &&
      gameTiles["tile5"] == "o" &&
      gameTiles["tile6"] == "o") ||
    (gameTiles["tile1"] == "o" &&
      gameTiles["tile5"] == "o" &&
      gameTiles["tile9"] == "o") ||
    (gameTiles["tile3"] == "o" &&
      gameTiles["tile5"] == "o" &&
      gameTiles["tile7"] == "o")
  ) {
    result = "o win";
    showResult("o");
    addScore("o");
  }
  if (tilesFilled == 9 && result == "") {
    result = "tie";
    showResult("t");
    addScore("t");
  }
};

let showResult = (resultType) => {
  resultPage.style.display = "flex";
  if (resultType == "x") {
    xResult.classList.add("on");
  } else if (resultType == "o") {
    oResult.classList.add("on");
    resultText.style.color = "#f4b036";
  } else {
    resultHeading.innerHTML = "no winner!";
    resultText.innerHTML = "tie";
    resultIcon.style.display = "none";
  }
};

let addScore = (scoreType) => {
  if (scoreType == "x") {
    xScore += 1;
    showScores[0].innerHTML = xScore;
  } else if (scoreType == "o") {
    oScore += 1;
    showScores[2].innerHTML = oScore;
  } else {
    tieScore += 1;
    showScores[1].innerHTML = tieScore;
  }
};

let nextRound = () => {
  resultPage.style.display = "none";
  xResult.classList.remove("on");
  oResult.classList.remove("on");
  result = "";
  tilesFilled = 0;
  playerTurn = "x";
  markTurns[0].classList.remove("off");
  markTurns[1].classList.add("off");

  for (let i = 0; i <= 9; i += 1) {
    gameTiles[`tile${i}`] = "";
    xIcons[i].classList.remove("on");
    oIcons[i].classList.remove("on");
  }
};

let restart = () => {
  xScore = 0;
  oScore = 0;
  tieScore = 0;
  for (let i = 0; i <= 2; i += 1) {
    showScores[i].innerHTML = 0;
  }
  nextRound();
};

// COMPUTER AI
let randNum = () => {
  let num = Math.floor(Math.random() * 9) + 1;
  console.log(num);
  if (gameTiles[`tile${num}`] == "") {
  }
};
