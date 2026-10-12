class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mainAns = [];
        // // Time Limit Exceeds ( TLE error )
        // const fillStrs = new Array(strs.length).fill(0)
        // for(let i=0;i <strs.length; i++) {
        //     if(fillStrs[i]!==0) continue;
        //     let currChar = strs[i].split("").sort().join("");
        //     let ans = [strs[i]];
        //     fillStrs[i] = 1;
        //     for(let j=i+1; j<strs.length; j++) {
        //         if(fillStrs[j]!==0) continue;
        //         let iterateChar =  strs[j].split("").sort().join("");
        //         if(currChar === iterateChar) {
        //             ans.push(strs[j]);
        //             fillStrs[j] = 1
        //         }
        //     }
        //     mainAns.push(ans);
        //     ans = [];
        // }
        const obj = {};
        let char;
        for( let i=0; i< strs.length; i++ ) {
            char = strs[i];
            let sortedChar = char.split("").sort().join("");
            if(obj[sortedChar]===undefined) {
                obj[sortedChar] = [char];
            }else {
                obj[sortedChar].push(char);
            }
            
        }
        for (let o in obj) {
            mainAns.push(obj[o])
        }
        return mainAns
    }
}
