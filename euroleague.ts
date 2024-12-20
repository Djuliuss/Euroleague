// TypeScript version of the game

// Define Player interface
interface Player {
  name: string;
  team: number;
}

// Player data
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
];

let streak: number = 0; // Streak counter
let currentPlayerIndex: number = 0; // Current player index

function startGame(): void {
  console.log("Game started! Type 'guess(teamNumber)' to play.");
  askNextPlayer();
}

function askNextPlayer(): void {
  if (currentPlayerIndex < players.length) {
    console.log(`Player: ${players[currentPlayerIndex].name}`);
  } else {
    console.log("Game over! You guessed all players. Your final streak: " + streak);
  }
}

function guess(team: number): void {
  if (currentPlayerIndex >= players.length) {
    console.log("Game over! Restart to play again.");
    return;
  }

  const currentPlayer: Player = players[currentPlayerIndex];
  if (team === currentPlayer.team) {
    streak++;
    console.log("CORRECT! Current Streak: " + streak);
  } else {
    streak = 0;
    console.log("INCORRECT! Streak reset to 0.");
  }

  currentPlayerIndex++;
  askNextPlayer();
}

// Start the game by calling startGame()
startGame();
