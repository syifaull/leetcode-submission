function fizzBuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      result.push("fizzbuzz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else if (i % 3 === 0) {
      result.push("fizz")
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(fizzBuzz(100))