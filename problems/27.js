const isPrime = (num) => {
  for (j = 2; j <= num ** 0.5; j++) {
    if (num % j === 0) {
        return false
    }
  }
  return true
}

let max_n = 0;
for(a = -1000; a < 1001; a++) {
  for(b = -1000; b < 1001; b++) {
    let n = 0;
    while(true) {
      const value = n**2 + a*n + b;
      if(value > 0 && isPrime(value)) n++
      else {
        if(n > max_n) {
          max_n = n
          console.log(a*b)
        }
        break
      }
    }
  }
}