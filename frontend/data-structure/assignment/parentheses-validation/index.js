const Stack = require('./stack')

function IsValidParentheses(s) {
    // TODO: answer here
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    if (s.length === 0) {
      return false;
    }
    if (s.length % 2 !== 0) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char in map) {
            const top = stack.pop();
            if (top !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

module.exports = {
    IsValidParentheses
}