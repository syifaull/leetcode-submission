var buildArray = function(nums) {
    let array = [];
      for (let i = 0; i <= nums.length; i++) {
        nums[i] ++;
      }
      return array;
};

console.log(buildArray([0,2,1,5,3,4])) 