let sum = '';

while (true) {
  const n = prompt('Your number:');
  if (n >= 1 && n <= 100) {
    sum += n;
  } else {
    break;
  }
  if (!n) break;
}
console.log(sum);
