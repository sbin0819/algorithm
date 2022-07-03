const arr = [3, 2, 1, 5, 4];

function sol(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
  }
  return arr;
}

console.log(sol(arr));
