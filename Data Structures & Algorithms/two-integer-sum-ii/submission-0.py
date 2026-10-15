class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        st,en = 0,len(numbers)-1
        while st<en:
            add = numbers[st] + numbers[en]
            if add == target:
                return [st + 1, en + 1 ]
            elif add > target:
                en -= 1
            else: st+= 1
        