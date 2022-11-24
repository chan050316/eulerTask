// 600851475143를 나눔
let SET_NUM = 600851475143;
let result = 0;

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

for (i = 1; i <= SET_NUM; i++) {
  if (isPrime(i) === true) {
    // 소수가 아닌지 확인
    if (SET_NUM % i === 0) {
      // 소수로 나눠지는지 확인
      result = i;
      SET_NUM = SET_NUM / i;
    }
  }
}

console.log(result);
