const divisors = number => {
  sqrtNumber = Math.sqrt(number);
  let sum = 1;
  let half = number / 2;
  for (let i = 2; i <= half; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  if (sum > number) {
    return true;
  } else {
    return false;
  }
};

let abundent = [];
const upperLimit = 28123;
for (var i = 1; i <= upperLimit; i++) {
  if (divisors(i)) {
    abundent.push(i);
  }
}
var abundentCount = abundent.length;
var canBeWrittenAsAbundant = [];
for (var i = 0; i < abundentCount; i++) {
  for (var j = i; j < abundentCount; j++) {
    if (abundent[i] + abundent[j] <= upperLimit) {
      canBeWrittenAsAbundant[abundent[i] + abundent[j]] = true;
    } else {
      break;
    }
  }
}
var sum = 0;
for (i = 1; i <= upperLimit; i++) {
  if (canBeWrittenAsAbundant[i] == true) {
    continue;
  } else {
    sum += i;
  }
}

console.log(sum);
