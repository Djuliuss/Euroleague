// TypeScript version of the game
import { readUserInput } from "./file";
import { players } from "./data";
import { validateReset } from "./utils";

let streak: number = 0; // Streak counter
const streakTarget: number = 250;

async function playGame(): Promise<void> {
  while (streak < streakTarget) {
    const randomNumber = Math.floor(Math.random() * players.length);
    const randomPlayer = players[randomNumber];
    const readGuess = await readUserInput(`Player: ${randomPlayer.name}\n`);
    const { isReset, newValueStreak } = validateReset(readGuess);
    if (isReset) {
      streak = Number(newValueStreak);
      console.log(`Resetting streak to ${streak}`);
    } else {
      validateGuess(randomPlayer.team, Number(readGuess));
    }
  }
  console.log("Game over! You guessed all players. Your final streak: " + streak);
}

function validateGuess(team: number, guessNumber: number): void {
  if (team === guessNumber) {
    streak++;
    console.log("CORRECT! Current Streak: " + streak);
  } else {
    streak = 0;
    console.log(`INCORRECT! Streak reset to 0. The right answer was ${team}`);
  }
}

// Start the game by calling startGame()
(async () => {
  await playGame();
})();
