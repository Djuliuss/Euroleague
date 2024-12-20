// TypeScript version of the game
import { readUserInput } from "./file";

// Define Player interface
interface Player {
  name: string;
  team: number;
}

// Player data

// 1 - Monaco
// 2 - Olympiacos
// 3 - Red Star

const players: Player[] = [
  { name: "MIKE JAMES", team: 1 },
  { name: "ALPHA DIALLO", team: 1 },
  { name: "ELIE OKOBO", team: 1 },
  { name: "JARON BLOSSOMGAME", team: 1 },
  { name: "JORDAN LOYD", team: 1 },
  { name: "GEORGIOS PAPAGIANNIS", team: 1 },
  { name: "DONATAS MOTIEJUNAS", team: 1 },
  { name: "MATTHEW STRAZEL", team: 1 },
  { name: "MAM JAITEH", team: 1 },
  { name: "VITTO BROWN", team: 1 },
  { name: "SASHA VEZENKOV", team: 2 },
  { name: "EVAN FOURNIER", team: 2 },
  { name: "THOMAS WALKUP", team: 2 },
  { name: "NIKOLA MILUTINOV", team: 2 },
  { name: "NIGEL WILLIAMS-GOSS", team: 2 },
  { name: "LUCA VILDOZA", team: 2 },
  { name: "ALEC PETERS", team: 2 },
  { name: "SHAQUIELLE MCKISSIC", team: 2 },
  { name: "KOSTAS PAPANIKOLAOU", team: 2 },
  { name: "MOUSTAPHA FALL", team: 2 },
  { name: "FILIP PETRUSEV", team: 3 },
  { name: "JOEL BOLOMBOY", team: 3 },
  { name: "NIKOLA KALINIC", team: 3 },
  { name: "CODI MILLER-MCINTYRE", team: 3 },
  { name: "YAGO DOS SANTOS", team: 3 },
  { name: "NEMANJA NEDOVIC", team: 3 },
  { name: "LUKA MITROVIC", team: 3 },
  { name: "ISAIAH CANAAN", team: 3 },
  { name: "MIKE DAUM", team: 3 },
  { name: "DEJAN DAVIDOVAC", team: 3 },
];

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
