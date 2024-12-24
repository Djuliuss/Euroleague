// TypeScript version of the game
import { readUserInput } from "./file";
import { Player, players } from "./data";
import { shuffleArray } from "./utils";

async function playGame(): Promise<void> {
  const myPlayers = shuffleArray(players);
  while (myPlayers.length > 0) {
    console.info(`${myPlayers.length} to go`);
    const randomPlayer = myPlayers.shift() as Player;
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
        myPlayers.push(randomPlayer!);
      }
    }
  }
  console.log("Game over! You guessed all players");
}

// Start the game by calling startGame()
(async () => {
  await playGame();
})();
