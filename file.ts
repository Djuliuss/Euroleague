// Import necessary library for non-blocking user input
import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

// Create a function to read input from the user
export async function readUserInput(promptMessage: string): Promise<string> {
  const rl = createInterface({ input, output });
  const answer = await rl.question(promptMessage);
  rl.close();
  return answer.trim();
}

// Example usage in another file:
// import { readUserInput } from './read_user_input';
// const userInput = await readUserInput("Enter your guess: ");
