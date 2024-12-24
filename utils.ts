export function validateReset(input: string): boolean {
  // Check if the input matches the pattern
  const match = input.match(/^[rR](\d+)$/);
  // If it matches, return true and the captured number as the value
  return match ? true : false;
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]; // Create a shallow copy using the spread operator
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
}
