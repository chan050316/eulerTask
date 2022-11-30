// 경우의 수 공식 [아래로 갈 수 있는 방향 20, 왼쪽으로 갈 수 있는 방향 20]
// = nCr = 40C20

let result = 1;
let n = 1;
let r = 1;
for (i = 40; i > 0; i--) {
  n *= i;
}
for (i = 20; i > 0; i--) {
  r *= i;
}
console.log(n / r ** 2);
