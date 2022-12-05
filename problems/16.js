let number = [1];
let result = 0;

for (i = 0; i < 1000; i++) {
  let overflow = 0;
  let listCount = number.length + 1;

  for (j = 0; j < listCount; j++) {
    let digit = number[j] || 0;
    digit = 2 * digit + overflow;
    if (digit > 9) {
      digit -= 10;
      overflow = 1;
    } else {
      overflow = 0;
    }
    number[j] = digit;
  }
}
for (i = 0; i < 1000; i++) {
  result += number[i];
}

console.log(result);
