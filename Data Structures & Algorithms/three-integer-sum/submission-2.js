class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const ans = [];
        nums.sort((a,b) => a - b);
        for (let i=0;i<nums.length; i++) {
            let ith = nums[i];
            if(i>0 && ith === nums[i-1])continue;
            let st = i+1,en=nums.length-1;
            while (st<en) {
                let sum = nums[st] + nums[en];
                if(sum + ith ===0) {
                    ans.push([ith, nums[st], nums[en]]);
                    st ++;
                    en --;
                    while (st < en && nums[st] === nums[st - 1]) st++;
                    while (st < en && nums[en] === nums[en + 1]) en--;
                }else if(sum + ith > 0) {
                    en --
                }else{
                    st ++
                }
            }
        }
        return ans
    }
}