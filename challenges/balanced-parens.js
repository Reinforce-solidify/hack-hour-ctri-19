/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = input => {
    const matches = {
        '[': ']',
        '(': ')',
        '{': '}'
    }

    const stack = [];
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (char in matches) stack.push(char)
        else if (char === ')' || char === ']' ||char === '}') {
            if (matches[stack.pop()] !== char) return false
        }
    }

    return !stack.length;
};

console.log(balancedParens(' const wow = { yo: thisIsAwesome() }'));
module.exports = { balancedParens} ;
