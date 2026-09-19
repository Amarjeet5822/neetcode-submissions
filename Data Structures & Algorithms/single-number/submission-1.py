class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        # 2nd approach
        dic = {}
        for ele in nums:
            if dic.get(ele)== None:
                dic[ele] = 1
            else :
                del dic[ele]
        for key in dic:
            return key
        # 1st approach
        # for i in range(len(nums)):
        #     flag = True
        #     for j in range(len(nums)):
        #         if i!=j and nums[i]^nums[j]==0:
        #             flag= False
        #             break
        #     if flag:
        #         return nums[i]
            
            
