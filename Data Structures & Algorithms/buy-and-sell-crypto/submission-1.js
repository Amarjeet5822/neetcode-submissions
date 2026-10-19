class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let sell = 0
        for(let i=prices.length-1;i>=0; i--) {
            let buy = prices[i];
            profit = Math.max(profit, sell - buy )
            sell = Math.max(sell, buy);
            
        }
        return profit
    }
}
