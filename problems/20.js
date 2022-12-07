function main(n) {
  let factCounter = 1n;
  for (i = n; i > 0n; --i) {
    factCounter *= i;
  }
  let numArr = factCounter.toString().split("");
  let sum = 0;
  numArr.forEach(el => (sum += +el));
  console.log(sum);
}
main(100n);
