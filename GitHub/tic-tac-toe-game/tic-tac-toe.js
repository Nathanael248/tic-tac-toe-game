let board = ["", "", "", "", "", "", "", "", ""]; // Represents the Tic Tac Toe board

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
  } else if (
    board[3] === playerMove &&
    board[4] === playerMove &&
    board[5] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
  } else if (
    board[6] === playerMove &&
    board[7] === playerMove &&
    board[8] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
  } else if (
    board[0] === playerMove &&
    board[3] === playerMove &&
    board[6] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
  } else if (
    board[1] === playerMove &&
    board[4] === playerMove &&
    board[7] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
  } else if (
    board[2] === playerMove &&
    board[5] === playerMove &&
    board[8] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
  } else if (
    board[0] === playerMove &&
    board[4] === playerMove &&
    board[8] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
  } else if (
    board[2] === playerMove &&
    board[4] === playerMove &&
    board[6] === playerMove
  ) {
    document.querySelector(".js-display-result").innerHTML =
      `We now have a winner!: ${playerMove}`;
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
  } else {
    document.querySelector(".js-display-result").innerHTML = "Keep on playing";
  }
}
// console.log(board[1], board[2], board[0]);
// if (board[1] && board[2] && board[0] === "X") {
//   console.log("working perfectly");
// }
let playerMove = "X";

document.querySelector(`.js-cell-0`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-0`);
  const buttonId = document.querySelector(".js-cell-0").dataset.boxNo;

  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;
  checkGame(playerMove);
  board[buttonId] = playerMove;

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-1`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-1`);
  const buttonId = document.querySelector(".js-cell-1").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-2`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-2`);
  const buttonId = document.querySelector(".js-cell-2").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-3`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-3`);
  const buttonId = document.querySelector(".js-cell-3").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-4`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-4`);
  const buttonId = document.querySelector(".js-cell-4").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-5`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-5`);
  const buttonId = document.querySelector(".js-cell-5").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-6`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-6`);
  const buttonId = document.querySelector(".js-cell-6").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-7`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-7`);
  const buttonId = document.querySelector(".js-cell-7").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-8`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-8`);
  const buttonId = document.querySelector(".js-cell-8").dataset.boxNo;
  if (isCellOccupied(buttonId, move)) {
    return;
  }
  move.innerHTML = `<img class="move" src="${playerMove}.png" />`;

  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});
