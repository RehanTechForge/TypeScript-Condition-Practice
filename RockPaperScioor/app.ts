let playerOne: string = "Rock";
let playerTwo: string = "Scissors";

if (
  playerOne === "Rock" && playerTwo === "Scissors" ||
  playerOne === "Scissors" && playerTwo === "Paper" ||
  playerOne === "Paper" && playerTwo === "Rock"
) {
  console.log("Player One Wins");
} else {
  console.log("Player Two Wins");
}