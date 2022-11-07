/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let result = [];
  let biggest = candies[0];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] >= biggest) {
      biggest = candies[i];
    }
  }


  let sumCandies = candies.map((candy) => {
    return candy + extraCandies;
  });

  for (let i = 0; i < sumCandies.length; i++) {
      console.log(sumCandies[i])
    if (sumCandies[i] >= biggest) {
      result.push(true)
    } else {
      result.push(false)
    }
  }
    
  return result;
};