/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
  let pair1 = [];
  let pair2 = [];
  let newNum = Array.from(String(num), Number).sort();
  for (let i = 0; i < newNum.length; i++) {
    if (i % 2 !== 0) {
      pair1.push(newNum[i]);
    } else {
      pair2.push(newNum[i]);
    }
  }
  return Number(pair1.join("")) + Number(pair2.join(""));
};