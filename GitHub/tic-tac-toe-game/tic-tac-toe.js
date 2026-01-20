let board = ["", "", "", "", "", "", "", "", ""]; // Represents the Tic Tac Toe board

function checkGame(playerMove) {
  if (
    board[0] === playerMove &&
    board[1] === playerMove &&
    board[2] === playerMove
  ) {
    document.querySelector(
      ".js-display-result"
    ).innerHTML = `We now have a winner!: ${playerMove}`;
  } else if (
    board[3] === playerMove &&
    board[4] === playerMove &&
    board[5] === playerMove
  ) {
    document.querySelector(
      ".js-display-result"
    ).innerHTML = `We now have a winner!: ${playerMove}`;
  } else if (
    board[6] === playerMove &&
    board[7] === playerMove &&
    board[8] === playerMove
  ) {
    document.querySelector(
      ".js-display-result"
    ).innerHTML = `We now have a winner!: ${playerMove}`;
  } else if (
    board[0] === playerMove &&
    board[3] === playerMove &&
    board[6] === playerMove
  ) {
    document.querySelector(
      ".js-display-result"
    ).innerHTML = `We now have a winner!: ${playerMove}`;
  } else if (
    board[1] === playerMove &&
    board[4] === playerMove &&
    board[7] === playerMove
  ) {
    document.querySelector(
      ".js-display-result"
    ).innerHTML = `We now have a winner!: ${playerMove}`;
  } else if (
    board[2] === playerMove &&
    board[5] === playerMove &&
    board[8] === playerMove
  ) {
    document.querySelector(
      ".js-display-result"
    ).innerHTML = `We now have a winner!: ${playerMove}`;
  } else if (
    board[0] === playerMove &&
    board[4] === playerMove &&
    board[8] === playerMove
  ) {
    document.querySelector(
      ".js-display-result"
    ).innerHTML = `We now have a winner!: ${playerMove}`;
  } else if (
    board[2] === playerMove &&
    board[4] === playerMove &&
    board[6] === playerMove
  ) {
    document.querySelector(
      ".js-display-result"
    ).innerHTML = `We now have a winner!: ${playerMove}`;
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
  move.innerHTML = playerMove;

  const buttonId = document.querySelector(".js-cell-0").dataset.boxNo;
  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-1`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-1`);
  move.innerHTML = playerMove;

  const buttonId = document.querySelector(".js-cell-1").dataset.boxNo;
  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-2`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-2`);
  move.innerHTML = playerMove;

  const buttonId = document.querySelector(".js-cell-2").dataset.boxNo;
  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-3`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-3`);
  move.innerHTML = playerMove;

  const buttonId = document.querySelector(".js-cell-3").dataset.boxNo;
  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-4`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-4`);
  move.innerHTML = playerMove;

  const buttonId = document.querySelector(".js-cell-4").dataset.boxNo;
  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-5`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-5`);
  move.innerHTML = playerMove;

  const buttonId = document.querySelector(".js-cell-5").dataset.boxNo;
  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-6`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-6`);
  move.innerHTML = playerMove;

  const buttonId = document.querySelector(".js-cell-6").dataset.boxNo;
  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-7`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-7`);
  move.innerHTML = playerMove;

  const buttonId = document.querySelector(".js-cell-7").dataset.boxNo;
  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});

document.querySelector(`.js-cell-8`).addEventListener("click", () => {
  let move = document.querySelector(`.js-cell-8`);
  move.innerHTML = playerMove;

  const buttonId = document.querySelector(".js-cell-8").dataset.boxNo;
  board[buttonId] = playerMove;
  checkGame(playerMove);

  playerMove = playerMove === "X" ? (playerMove = "O") : (playerMove = "X");
});
// board[2] = "string";
// for (let i = 0; i < board.length; i++) {
//   let move = board[i];
// console.log("move");
// }
