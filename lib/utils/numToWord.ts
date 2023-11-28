export function numToWord(number: number) {
  // Define an array of word representations for numbers 1 to 9
  const words = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  // Check if the number is within the valid range
  if (number >= 1 && number <= 9) {
    // Return the word representation for the given number
    return words[number - 1];
  } else {
    // Handle the case for numbers outside the valid range
    return "Number out of range";
  }
}
