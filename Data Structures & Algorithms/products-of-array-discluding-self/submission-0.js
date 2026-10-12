class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1
        let prefixProduct = Array(nums.length).fill(1);
        for( let i=0;i<nums.length; i++) {
            prefixProduct[i] *= prefix
            prefix *= nums[i]
        }
        let sufix = 1
        let sufixProduct = Array(nums.length).fill(1);
        for( let i=nums.length-1;i>=0; i--) {
            sufixProduct[i] *= sufix
            sufix *= nums[i]
        }
        const ans = [];
        for(let i=0; i<nums.length; i++) {
            ans.push( prefixProduct[i] * sufixProduct[i])
        }
        return ans
    }
}
