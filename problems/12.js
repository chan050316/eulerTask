let result = 0;
let triangularNum = 0;

for (i = 1; ; i++) {
  triangularNum = triangularNum + i;
  let measure = 0;
  for (j = 0; j <= triangularNum ** 0.5; j++) {
    if (triangularNum % j === 0) {
      if (triangularNum / j === j) measure += 1;
      if (triangularNum / j !== j) measure += 2;
    }
  }
  if (measure >= 500) {
    console.log(triangularNum);
    return;
  }
}
