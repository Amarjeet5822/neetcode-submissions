class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }
        // const ss = s.split('').sort();
        // const tt = t.split('').sort();
        // if(s.length !== t.length) {
        //     return false
        // }
        // let i = 0
        // while (i< s.length) {
        //     if(ss[i]!==tt[i]) {
        //         return false
        //     }
        //     i++
        // }
        // return true
        const objS = {};
        const objT = {};
        for( let i=0;i<s.length; i++) {
            if(!objS[s[i]]) {
                objS[s[i]] = 1
            }else if(objS[s[i]]) {
                objS[s[i]] += 1
            }
            if (!objT[t[i]]) {
                objT[t[i]] = 1
            }else if(objT[t[i]]){
                objT[t[i]] += 1
            }
        }
        const lenS = Object.keys(objS).length
        const lenT = Object.keys(objT).length
        if(lenS!==lenT) {
            return false
        }
        for( let key in objS) {
            // console.log(key)
            // console.log("key, objT[key]", key, "//", objS[key])
            if(objS[key] !== objT[key]) {
                return false
            }
        }
        return true

    }
}
