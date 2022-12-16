function permutate(n, array) {
  const al = array.length;
  for (let i = 0; i < n - 1; i++) {
    let k, l;
    for (let j = 0; j < al - 1; j++) {
      // 재배치 할 수 없는 수
      if (array[j] < array[j + 1]) {
        // 재배치 할 수 없는 수 중 가장 큰 수
        k = j;
      }
    }
    for (let j = k; j < al; j++) {
      // 재배치 할 수 있는 수들
      if (array[k] < array[j]) {
        // 재배치 할 수 있는 수들
        l = j;
      }
    }
    let tmp = array[k];
    array[k] = array[l];
    array[l] = tmp;
    let begin = k + 1;
    let end = al - 1;
    while (begin < end) {
      // 순서를 바꿔서 경우의 수 채우기
      tmp = array[begin];
      array[begin] = array[end];
      array[end] = tmp;
      begin += 1;
      end -= 1;
    }
  }
  return array;
}
console.log(permutate(1_000_000, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).join(""));
