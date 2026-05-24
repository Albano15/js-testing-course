export function add(numbers) {
  if (!numbers) throw new Error("Not numbers defined")
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
