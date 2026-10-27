class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    constructor() {
        this.items = []
    }
    pop() {
        if(this.items.length > 0) {
           return this.items.pop()
        }
        return null
    }
    push(ele) {
        this.items.push(ele);
    }
    top() {
        if(this.items.length > 0) {
           return this.items[this.items.length-1]
        }
        return null
    }
    reverseChar(s) {
        if(s===')') return '(';
        if( s==='}') return '{';
        if( s===']') return '[';
    }
    isValid(s) {
        for(let i=0;i<s.length; i++) {
            if ( this.items.length && this.top()=== this.reverseChar(s[i])) {
                this.pop()
                continue;
            }
            this.push(s[i]);

        }
        if(this.items.length) return false
        return true
    }
}
