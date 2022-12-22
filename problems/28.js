let sum = 1;

let result = 1;
// count는 2씩 늘어남
let count = 0
for(i = 3; i <= 1001; i += 2){
  for(j = 1; j < 5; j++) {
    result += i - 1
    sum += result
  }
}
console.log(sum)