let result = 0;

for (i = 100; i < 999; i++) {
  for (j = 100; j < 999; j++) {
    const multipliedNum = String(i * j);
    if (
      multipliedNum.slice(0, multipliedNum.length / 2) ===
      multipliedNum
        .slice(multipliedNum.length / 2, multipliedNum.length)
        .split("")
        .reverse()
        .join("")
    ) {
      if (multipliedNum > result) result = multipliedNum;
    }
  }
}

console.log(result);
