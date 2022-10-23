var runningSum = function(nums) {
  let newArray = [nums[0]];
  for (let i = 1; i < nums.length; i ++) {
    newArray.push(nums[i] + newArray[newArray.length - 1])
  } 
  return newArray;
};

console.log(runningSum([1, 2, 3, 4]));