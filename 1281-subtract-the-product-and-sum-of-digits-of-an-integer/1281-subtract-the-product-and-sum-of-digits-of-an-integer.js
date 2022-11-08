/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let array = (n.toString()).split("")
    let sum = 0;
    let multiple = 1;
    for ( let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
        multiple *= parseInt(array[i]);
  }
  return multiple - sum;
};