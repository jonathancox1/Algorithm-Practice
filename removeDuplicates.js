var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[(i + 1)]) {
            nums.splice(nums[(i + 1)], 1)
        }
    }
    return nums
};
let nums = [1, 1, 2]
console.log(removeDuplicates(nums))