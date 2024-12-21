export function validateReset(input: string): { isReset: boolean; newValueStreak: string | undefined } {
  // Check if the input matches the pattern
  const match = input.match(/^[rR](\d+)$/);
  // If it matches, return true and the captured number as the value
  return match
    ? {
        isReset: true,
        newValueStreak: match[1],
      }
    : // If it doesn't match, return false and undefined
      {
        isReset: false,
        newValueStreak: undefined,
      };
}
