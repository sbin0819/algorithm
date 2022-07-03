const arr = [...Array(8)].map(() => Math.floor(Math.random() * (30 - 1)) + 1);

// function sol(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let idx = i;
//     let temp = arr[i];
//     while (idx >= 0 && arr[idx - 1] > temp) {
//       arr[idx] = arr[idx - 1];
//       idx--;
//     }
//     arr[idx] = temp;
//   }
//   return arr;
// }

function sol(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}

console.log(sol([4, 3, 2, 1]));
