class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const obj = {};
        let st = 0, i=0;
        let res = 0
        while (i<s.length) {
            while(obj[s[i]]) {
                delete obj[s[st]]
                st ++;
            }
            obj[s[i]] = 1
            res = Math.max( res, i-st + 1);
            i++;
        }
        return res;
    }
}
