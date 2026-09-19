class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        ans = {}
        for i in range(0,len(nums)):
            if(nums[i] in ans):
                return True
            else:
                ans[nums[i]] = 1
        return False
