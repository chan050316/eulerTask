let result = 0
for (i = 2; i < 1000000; i++) {
  const string = String(i);
  let value = 0
  for (j = 0; j < string.length; j++) {
    value += Number(string[j]) ** 5
  }
  if (i == value) {
    console.log(i)
    result += i
  }
}

console.log(result)

// console.log((9**5)) // 9, 59049
// console.log((9**5)*2) // 99, 118098
// console.log((9**5)*3) // 999, 177147
// console.log((9**5)*4) // 9999, 236196
// console.log((9**5)*5) // 99999, 295245
// console.log((9**5)*6) // 999999, 354294
// console.log((9**5)*7) // 9999999, 413343
// console.log((9**5)*8) // 99999999, 472392

// 가장 큰 7자리 수인 999999(7번)를 보았을 때 값인 413343의 자릿수가 무조건 999999(7번)보다 적기 때문에
// 문제에서 언급한 수들은 7자리는 넘기지 못한다는 것을 이용해 99999(6번)까지인 1000000을 for문의 기준으로 잡았다.
