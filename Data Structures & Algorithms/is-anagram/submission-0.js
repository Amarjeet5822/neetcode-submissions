class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const ss = s.split('').sort();
        const tt = t.split('').sort();
        if(s.length !== t.length) {
            return false
        }
        let i = 0
        while (i< s.length) {
            if(ss[i]!==tt[i]) {
                return false
            }
            i++
        }
        return true
    }
}
