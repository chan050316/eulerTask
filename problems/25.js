var bigNumber = {};

bigNumber.digitArrayAdd = function (digits1, digits2) {
  // 피보나치 수열 추가
  var sumDigits = [];
  var length =
    digits1.length > digits2.length ? digits1.length : digits2.length;
  for (var i = 0; i < length; i++) {
    sumDigits[i] = (digits1[i] || 0) + (digits2[i] || 0) + (sumDigits[i] || 0);
    bigNumber.rebalanceDigitArray(sumDigits, i);
  }

  return sumDigits;
};

bigNumber.rebalanceDigitArray = function (digits, index) {
  // 9보다 높으면 index를 높이고, 10의 자리 수를 배열에 추가 -> 피보나치 수열 재조정
  var digit = digits[index];
  while (digit > 9) {
    digits[index] = digit % 10;

    index++;
    digits[index] = digit = (digits[index] || 0) + (digit - (digit % 10)) / 10;
  }
};
const getFirstFibTermNumberWithDigits = (n) => {
  if (n <= 1) {
    return 1;
  }

  var previous = [1];
  var current = [1];
  var counter = 2;

  while (current.length < n) {
    var temp = current;
    current = bigNumber.digitArrayAdd(previous, current);
    previous = temp;
    counter++;
    console.log(current);
  }
  console.log(
    "Fib Number is: " + current.reverse().toString().replace(/,/g, "")
  );

  return counter;
};

// console.log(getFirstFibTermNumberWithDigits(3));
console.log(getFirstFibTermNumberWithDigits(1000));
