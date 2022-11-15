let result = 0;
let beforNum1 = 1;
let beforNum2 = 0;

for (i = 0; i < 4000000; i) {
  i = beforNum1 + beforNum2;
  if (i % 2 === 0) result += i;
  beforNum2 = beforNum1;
  beforNum1 = i;
}

console.log(result);
