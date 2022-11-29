// a 제곱 + b 제곱 = c 제곱
// a + b + c = 1000
// => a 제곱 + b 제곱 = (1000 - a - b) 제곱

let result = 0

for(a = 1; a <= 1000; a++) {
  for(b = 1; b <= a; b++) {
    if(a**2 + b**2 === (1000 - a - b)**2) {
      result = a * b * (1000 - a - b)
    }
  }
}

console.log(result)