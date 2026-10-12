class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {}
        for(let i=0; i<nums.length; i++) {
            if(obj[nums[i]]===undefined) obj[nums[i]] = 0;
            obj[nums[i]] += 1;
        }
        let newK = k
        const ans = [];
        const sortedArray = Object.entries(obj).sort((a, b) => b[1] - a[1]);
        sortedArray.forEach((ele) => {
            const [a, b] = ele;
            if(newK) {
                ans.push(a)
                newK -= 1
            }
        })
        return ans

    }
}
