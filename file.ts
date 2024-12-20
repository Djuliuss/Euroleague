// Import necessary library for non-blocking user input
import readline from "readline";
import { stdin as input, stdout as output } from "process";

export function readUserInput(promptMessage: string): Promise<string> {
  const rl = readline.createInterface({ input, output });
  return new Promise((resolve) => {
    rl.question(promptMessage, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

// Example usage in another file:
// import { readUserInput } from './read_user_input';
// const userInput = await readUserInput("Enter your guess: ");
