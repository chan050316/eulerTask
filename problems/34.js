// 9! = 362880
let result = 0;

for (i = 3; i <= 40585; i++) {
  const splitNum = String(i).split("");
  let sumFactorial = 0;
  splitNum.forEach(num => {
    let factorial = 1;
    for (j = num; j > 0; j--) {
      factorial *= Number(j);
    }
    sumFactorial += factorial;
  });
  if (i === sumFactorial) {
    result += i;
  }
}
console.log(result);
