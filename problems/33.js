// ab / bc = a / c
// => (a*10 + b) / (b*10 + c) = a / c
// => 9ac + bc = 10ab
// => 9a + b = 10ab / c

// 0 < a <= b < 10;
// 0 < a < c < 10;

function p033() {
  var d = 1,
    n = 1;
  //d:분수  n:분모.

  for (a = 1; a < 9; a++) {
    for (b = a; b < 10; b++) {
      for (c = a + 1; c < 10; c++) {
        if (9 * a + b == (10 * a * b) / c) {
          //조건 만족시 분수 분모 곱해줌.
          d *= 10 * a + b;
          n *= 10 * b + c;
        }
      }
    }
  }

  var g = gcd(d, n); //약분을 위해 최대공약수를 구함.
  console.log(n / g);
}

function euclid(a, b) {
  if (b == 0) return a;
  return euclid(b, a % b);
}
function gcd(a, b) {
  console.log(a, b);
  return euclid(Math.max(a, b), Math.min(a, b));
}

p033();
