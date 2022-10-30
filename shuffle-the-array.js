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

console.log(shuffle([2, 5, 1, 3, 4, 7], 3))