// var smallestEvenMultiple = function(n) {
  
// };

// console.log(smallestEvenMultiple(6));
// console.log(smallestEvenMultiple(7));

var subtractProductAndSum = function(n) {
  let array = (n.toString()).split("")
  let sum = 0;
  let multiple = 0;
  for ( let i = 0; i < array.length; i++) {
    sum += array[i];
    multiple *= array[i];
  }
  console.log(sum)
  return multiple - sum;
};

console.log(subtractProductAndSum(234))