let result = 0;

const oneToNine = [3, 3, 5, 4, 4, 3, 5, 5, 4] // 1~9
const elevenToNineteen = [6, 6, 8, 8, 7, 7, 9, 9, 8] // 11~19
const multiplyTen = [6, 6, 6, 5, 5, 7, 6, 6] // 0-20-30 --- 90
const hundred = 7 // hundred
const and = 3 // and
const Thousand = 8 // Thousand

function plusOneToNinetynine() {
  // 1 ~ 9
  for(k = 0; k < oneToNine.length; k++) {
    result += oneToNine[k]
  }

  // 21 ~ 99 [- 10 ~ 19]
  for(j = 0; j < multiplyTen.length; j++) {
    for(k = 0; k < oneToNine.length; k++) {
      result += multiplyTen[j] + oneToNine[j]
    }
  }

  // 10 ~ 19
  result += 3
  for(j = 0; j < elevenToNineteen.length; j++) {
    result += elevenToNineteen[j]
  }

  // 20-30-40---90
  for(j = 0; j < multiplyTen.length; j++) {
    result += multiplyTen[j]
  }
}

function plusOneToThousand () {
  for(i = 0; i < 10; i++) {
    // 1 ~ 99
    plusOneToNinetynine();
  }
  for(i = 0; i < oneToNine.length; i++) {
    // 100 ~ 900
    for(j = 0; j < 99; j++) {
      result += oneToNine[i] + hundred + and
    }
  }
  result += 3 + Thousand // one thousand
  console.log(result)
}

plusOneToThousand()