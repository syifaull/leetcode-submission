/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let newNums = [];
    let numsOne = nums.slice(0, n);
    let numsTwo = nums.slice(n)
    for (let i = 0; i < numsOne.length; i++) {
        newNums.push(numsOne[i]);
        newNums.push(numsTwo[i]);
    }
    return newNums;
};