class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let st=0,en=numbers.length-1;
        while (st< en) {
            let sum = numbers[st] + numbers[en];
            if(target === sum) {
                return [ st + 1, en+1];
            }else if (sum > target) {
                en --;
            }else {
                st ++;
            }
        }
    }
}
