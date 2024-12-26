// TypeScript version of the game
import { readUserInput } from "./file";
import { Player, players } from "./data";
import { shuffleArray } from "./utils";

async function playGame(): Promise<void> {
  const myPlayers = shuffleArray(players);
  while (myPlayers.length > 0) {
    console.info(`${myPlayers.length} to go`);
    const randomPlayer = myPlayers.shift() as Player;
    if (randomPlayer.isRepeat) {
      console.info(`REPEAT!`);
    }
    const readGuess = await readUserInput(`Player: ${randomPlayer.name}\n`);
    const isReset = readGuess.toUpperCase() === "R";
    if (isReset) {
      console.log(`Removing from back of the pile`);
      myPlayers.pop();
      myPlayers.unshift(randomPlayer);
    } else {
      if (Number(randomPlayer.team) === Number(readGuess)) {
        console.log("CORRECT!");
      } else {
        console.log(`INCORRECT! Pushing back to the pile. The correct answer was ${randomPlayer.team}`);
        myPlayers.push({ ...randomPlayer, isRepeat: true });
      }
    }
  }
  console.log("Game over! You guessed all players");
}

(async () => {
  const startTime = performance.now(); // Start the timer
  await playGame();
  const endTime = performance.now(); // End the timer
  const timeTakenMs = endTime - startTime; // Time in milliseconds
  const totalSeconds = Math.floor(timeTakenMs / 1000); // Convert to seconds
  const minutes = Math.floor(totalSeconds / 60); // Calculate full minutes
  const seconds = totalSeconds % 60; // Remaining seconds
  console.log(`Execution time: ${minutes} minutes and ${seconds} seconds`);
})();
