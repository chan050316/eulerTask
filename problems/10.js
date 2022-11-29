const isPrime = N => {
  // 1은 소수가 아니다.
  if (N === 1) return false;
  // 2부터 N-1까지의 수로 N을 나눴을 때
  for (let i = 2; i <= N - 1; i++) {
    // 나누어 떨어지는 경우가 한 번이라도 있으면 N은 소수가 아니다.
    if (N % i === 0) return false;
  }
  // 모두 나누어 떨어지지 않으면 N은 소수이다.
  return true;
};

let result = 0

for(i = 0; i < 2_000_000; i++) {
  if(isPrime(i)) {
    result += i
  }
}

console.log(result)