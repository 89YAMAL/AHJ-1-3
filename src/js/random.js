export default function random(oldNumber) {
  let newNumber;

  do {
    const max = 16;
    newNumber = Math.floor(Math.random() * max);
  } while (oldNumber === newNumber);

  return newNumber;
}
