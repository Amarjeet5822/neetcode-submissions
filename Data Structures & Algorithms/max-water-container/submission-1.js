class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res=0,st=0,en=heights.length - 1;
        while ( st < en) {
            const area = Math.min(heights[st], heights[en]) * ( en - st);
            res = Math.max(res, area);
            if ( heights[st] < heights[en]) {
                st ++;
            }else {
                en --;
            }
        }
        return res;
    }
}
