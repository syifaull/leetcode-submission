var plusOne = function(digits) {
  for (let i = digits.length; i >= 0; i--) {
    if (digits[i] === 9) {

    }
  }
  digits.push(digits.pop() + 1)
  return digits
}

console.log(plusOne([1,2,3,9]));
console.log(plusOne([1,2,3]));
