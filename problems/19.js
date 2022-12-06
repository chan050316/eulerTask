const dayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let result = 0;
let count = 0;

for (y = 1900; y < 2001; y++) {
  for (m = 0; m < 12; m++) {
    let day = dayList[m];
    if (m === 1 && y % 4 === 0) day += 1;
    for (d = 1; d <= day; d++) {
      if (y > 1900 && d === 1 && result % 7 === 6) count++;
      result++;
    }
  }
}

console.log(count);
