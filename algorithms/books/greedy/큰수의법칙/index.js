let [n, m, k] = [5, 8, 3];
let arr = [2, 4, 5, 4, 6];

let result = 0;
let mNum = Math.max(...arr);
let sNum = Math.max(...arr.filter((el) => el != mNum));
let c = 0;

for (let i = 1, c = 1; i <= m; i++, c++) {
  if (c <= k) {
    result += mNum;
  } else {
    result += sNum;
    c = 1;
  }
}

console.log(result);
