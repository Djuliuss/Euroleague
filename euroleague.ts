// TypeScript version of the game
import { readUserInput } from "./file";
import { players } from "./data";

let streak: number = 0; // Streak counter
let streakTarget: number = 100; // Current player index

function startGame(): void {
  askNextPlayer();
}

async function askNextPlayer(): Promise<void> {
  if (streak < streakTarget) {
    const randomNumber = Math.floor(Math.random() * players.length);
    const randomPlayer = players[randomNumber];
    const readGuess = await readUserInput(`Player: ${randomPlayer.name}\n`);
    validateGuess(randomPlayer.team, Number(readGuess));
  } else {
    console.log("Game over! You guessed all players. Your final streak: " + streak);
  }
}

function validateGuess(team: number, guessNumber: number): void {
  if (team === guessNumber) {
    streak++;
    console.log("CORRECT! Current Streak: " + streak);
  } else {
    streak = 0;
    console.log(`INCORRECT! Streak reset to 0. The right answer was ${team}`);
  }

  askNextPlayer();
}

// Start the game by calling startGame()
startGame();
