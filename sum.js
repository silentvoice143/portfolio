function sum(n) {
  let a = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      a -= i;
      continue;
    }
    a += i;
  }
  console.log("Sum of the series=" + a);
}
