export function capitalizeWord(text: string) {
  const words = text.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });
  return capitalizedWords.join(" ");
}
