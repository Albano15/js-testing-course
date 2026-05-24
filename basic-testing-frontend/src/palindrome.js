export function palindrome(string) {
  if (!string) {
    throw new Error("String is required");
  }

  const normalized = string.toLowerCase();

  return normalized === normalized.split("").reverse().join("");
}