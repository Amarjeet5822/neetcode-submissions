class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash = {}
        for(let i=0; i<nums.length; i++) {
            let diff = target - nums[i]
            if(hash[diff] != undefined) {
                return [hash[diff], i]
            }
            hash[nums[i]] = i
        }

        // This code will work only for +ve numbers.
        // let st = 0, en = nums.length -1;
        // while( st < en) {
        //     let sum = nums[st]+nums[en]
        //     if(sum === target) {
        //         return [st, en]
        //     }else if(sum > target) {
        //         en -= 1
        //     }else {
        //         st += 1
        //     }

        // }
        // return [st, en]
    }
}
