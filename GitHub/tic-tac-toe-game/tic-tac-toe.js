let board = ["", "", "", "", "", "", "", "", ""]; // Represents the Tic Tac Toe board
let gameActive = true; // Track if the game is still active

function isCellOccupied(buttonId, move) {
  // Function to check if a cell is already occupied
  if (board[buttonId] !== "" && move.innerHTML !== "") {
    return true;
  }
}

function checkGame(playerMove) {
  if (
    board[0] === playerMove &&
    board[1] === playerMove &&
    board[2] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
    gameActive = false;
    return true;
  } else if (
    board[3] === playerMove &&
    board[4] === playerMove &&
    board[5] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
    gameActive = false;
    return true;
  } else if (
    board[6] === playerMove &&
    board[7] === playerMove &&
    board[8] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
    gameActive = false;
    return true;
  } else if (
    board[0] === playerMove &&
    board[3] === playerMove &&
    board[6] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
    gameActive = false;
    return true;
  } else if (
    board[1] === playerMove &&
    board[4] === playerMove &&
    board[7] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
    gameActive = false;
    return true;
  } else if (
    board[2] === playerMove &&
    board[5] === playerMove &&
    board[8] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
    gameActive = false;
    return true;
  } else if (
    board[0] === playerMove &&
    board[4] === playerMove &&
    board[8] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
    gameActive = false;
    return true;
  } else if (
    board[2] === playerMove &&
    board[4] === playerMove &&
    board[6] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
    gameActive = false;
    return true;
  } else if (
    board[0] &&
    board[1] &&
    board[2] &&
    board[3] &&
    board[4] &&
    board[5] &&
    board[6] &&
    board[7] &&
    board[8]
  ) {
    document.querySelector(".js-display-result").innerHTML = `It's a draw!`;
    gameActive = false;
  } else {
    document.querySelector(".js-display-result").innerHTML = "Keep on playing";
  }
}

let playerMove = "X";

document.querySelector(`.js-cell-0`).addEventListener("click", () => {
  if (!gameActive) return;

  let move = document.querySelector(`.js-cell-0`);
  const buttonId = document.querySelector(".js-cell-0").dataset.boxNo;

  if (isCellOccupied(buttonId, move)) {
    checkGame(playerMove);
    return;
  }

  if (checkGame(playerMove) === true) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;
  board[buttonId] = playerMove;
  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-1`).addEventListener("click", () => {
  if (!gameActive) return;

  let move = document.querySelector(`.js-cell-1`);
  const buttonId = document.querySelector(".js-cell-1").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }

  if (checkGame(playerMove) === true) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-2`).addEventListener("click", () => {
  if (!gameActive) return;

  let move = document.querySelector(`.js-cell-2`);
  const buttonId = document.querySelector(".js-cell-2").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }

  if (checkGame(playerMove) === true) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-3`).addEventListener("click", () => {
  if (!gameActive) return;

  let move = document.querySelector(`.js-cell-3`);
  const buttonId = document.querySelector(".js-cell-3").dataset.boxNo;
  checkGame(playerMove);
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  if (checkGame(playerMove) === true) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-4`).addEventListener("click", () => {
  if (!gameActive) return;

  let move = document.querySelector(`.js-cell-4`);
  const buttonId = document.querySelector(".js-cell-4").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  if (checkGame(playerMove) === true) {
    return;
  }
  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-5`).addEventListener("click", () => {
  if (!gameActive) return;

  let move = document.querySelector(`.js-cell-5`);
  const buttonId = document.querySelector(".js-cell-5").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  if (checkGame(playerMove) === true) {
    return;
  }
  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-6`).addEventListener("click", () => {
  if (!gameActive) return;

  let move = document.querySelector(`.js-cell-6`);
  const buttonId = document.querySelector(".js-cell-6").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  if (checkGame(playerMove) === true) {
    return;
  }
  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-7`).addEventListener("click", () => {
  if (!gameActive) return;

  let move = document.querySelector(`.js-cell-7`);
  const buttonId = document.querySelector(".js-cell-7").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  if (checkGame(playerMove) === true) {
    return;
  }
  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-8`).addEventListener("click", () => {
  if (!gameActive) return;

  let move = document.querySelector(`.js-cell-8`);
  const buttonId = document.querySelector(".js-cell-8").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  if (checkGame(playerMove) === true) {
    return;
  }
  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});
