class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (let str of strs) {
            res += String(str.length)+ "#" + String(str)
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while( i< str.length) {
            let j = i;
            while (str[j]!="#") {
                j++
            }
            let currLen = Number(str.slice(i,j));
            i = j+1
            j = i+ currLen;
            res.push(str.slice(i,j))
            i = j;
        }
        return res;
    }
}
