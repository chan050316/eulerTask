const dayList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let result = 0;
let count = 0;

for (y = 1900; y < 2001; y++) { // 년도 설정
  for (m = 0; m < 12; m++) { // 월 설정
    let day = dayList[m];
    if (m === 1 && y % 4 === 0) day += 1; // 윤년인 경우
    for (d = 1; d <= day; d++) { // 일 설정
      if (y > 1900 && d === 1 && result % 7 === 6) count++; // 월 1일이 일요일이라면
      result++;
    }
  }
}

console.log(count);
