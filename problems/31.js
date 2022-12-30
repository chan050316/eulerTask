const pence = [1, 2, 5, 10, 20, 50, 100, 200];

function slicePound(pound, i) {
  if (i === 1) {
    return Math.floor(pound / 2) + 1;
  }

  let cnt = 1;
  let p = pound;
  while (p > 0) {
    cnt += slicePound(p, i - 1);
    p -= pence[i];
  }

  if (p !== 0) {
    cnt--;
  }

  return cnt;
}

function operate(pound) {
  return slicePound(pound, pence.length - 1);
}

console.log(operate(200));
