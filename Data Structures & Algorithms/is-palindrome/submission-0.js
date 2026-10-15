class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isNotAlphanumeric(s) {
        const str = String(s);
        return /[^a-z0-9]/i.test(str);

    }
    isPalindrome(s) {
        let st = 0
        let en = s.length - 1;
        while (st < en) {
            if (this.isNotAlphanumeric(s[st])) {
                st++
                continue
            }
            if (this.isNotAlphanumeric(s[en])) {
                en--
                continue
            }
            if(s[st].toLowerCase()=== s[en].toLowerCase()) {
                st ++ 
                en --
            } else return false
        }
        return true
    }
}
