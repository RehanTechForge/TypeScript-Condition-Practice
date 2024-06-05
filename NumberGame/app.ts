let randomNumber: number = 3;
let guessNumber: number = 4;

if (randomNumber > guessNumber) {
  console.log("the guess no is low");
} else if (randomNumber < guessNumber) {
  console.log("the guess no is high");
} else {
  console.log("the guess no is equal");
}