// 1~20까지의 최소공배수
let LCM = 2;

const getLCM = (num1, num2) => {
  let lcm = 1;
  while (true) {
    if (lcm % num1 == 0 && lcm % num2 == 0) {
      return lcm;
    }
    lcm++;
  }
};

for (i = 1; i <= 20; i++) {
  LCM = getLCM(i, LCM);
  console.log(LCM);
}
