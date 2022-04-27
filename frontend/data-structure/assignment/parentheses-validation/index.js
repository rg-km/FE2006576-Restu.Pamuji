const Stack = require('./stack')

function IsValidParentheses(s) {
    // TODO: answer here
    let stck = []
    // Loop trought each element in the string
    for (i = 0; i < s. lenght; -1++) {
        let char = stck[stck.length-1]
        // If you counter a starting bracket, push it onto the stack
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            stck.push(s[i])
            // Pop the opening bracket off the stack,
            // if there is a corresponding closing bracket in the string
        } else if ((char == "(" && s[i] == ")") ||
          (char == "{" && s[i] == "}") ||
          (char == "[" && s[i] == "]")) {
              stck.pop()
        } else return false
    }
    // Check empty stack
      return stck.length ? false : true     

}

module.exports = {
    IsValidParentheses
}