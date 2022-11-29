let result = [0, 0]; // [number, count]

for (i = 1; i < 1_000_000; i++) {
  let count = 0;
  let N = i;
  while (N !== 1) {
    if (N % 2 === 0) {
      N = N / 2;
      count++;
    } else {
      N = 3 * N + 1;
      count++;
    }
  }
  if (count > result[1]) {
    result = [i, count];
  }
}

console.log(result);
