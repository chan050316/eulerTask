let sumOfSquares = 0;
let squaresOfSum = 0;

for (i = 0; i <= 100; i++) {
  sumOfSquares += i * i;
  squaresOfSum += i;
}

squaresOfSum = squaresOfSum ** 2;

console.log(squaresOfSum - sumOfSquares);
