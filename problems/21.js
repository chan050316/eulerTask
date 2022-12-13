const getMeasure = (num) => {
  let measure = [];
  for (j = 0; j <= num ** 0.5; j++) {
    if (num % j === 0) {
      if (num / j === j) {
        measure.push(j)
      }
      if (num / j !== j) {
        measure.push(j)
        if(j !== 1) measure.push(num / j)
      }
    }
  }
  return measure
}
let result = 0

for(triangularNum = 1; triangularNum < 10000; triangularNum++) {
  let amicableNumber = 0; 
  let sumAmicableNumberMeasure = 0;

  // 약수 구하기
  const measure = getMeasure(triangularNum)
  
  // 친화수 구하기
  measure.forEach(num => {
    amicableNumber += num
  })

  // 친화수의 약수 구하기
  const amicableNumberMeasure = getMeasure(amicableNumber)

  // 친화수의 친화수 구하기
  amicableNumberMeasure.forEach(num => {
    sumAmicableNumberMeasure += num
  })

  if(amicableNumber <= 10000 && triangularNum === sumAmicableNumberMeasure && triangularNum !== amicableNumber) {
    result += triangularNum + amicableNumber
  }
}

console.log(result / 2)