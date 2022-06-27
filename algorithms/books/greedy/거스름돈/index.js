function sol(n) {
  let count = 0;
  const coinsTypes = [500, 100, 50, 10];
  for (const coin of coinsTypes) {
    let m = n;
    count += Math.floor(m / coin);
    n = n % coin;
  }
  return count;
}

console.log(sol(1340));
