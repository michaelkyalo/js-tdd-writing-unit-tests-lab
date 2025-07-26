export function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("Only alphabetic characters are allowed");
  }

  const normalized = word.toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed && word.length > 0;
}

