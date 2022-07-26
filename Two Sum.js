
const twoSum = (nums, target) => {
    const map = new Map;
    for(var i = 0; i < nums.length; i++){
        var complement =  target - nums[i]
        if(map.has(complement))
            return [map.get(complement), i]
        else map.set(nums[i], i)
    }
    return null
};

//input : nums = [2, 7, 11, 15] , target = 9
//output: [0, 1]
