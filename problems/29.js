let result = new Set();

for(a = 2; a <= 100; a++) {
  for(b = 2; b <= 100; b++) {
    result.add(a ** b)
  }
}
console.log(result.size)