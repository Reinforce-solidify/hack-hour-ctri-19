/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

const generateParentheses = n => {
  const result = [];

  const generate = (str, l, r) => {
    if (r === 0) {
      result.push(str);
      return;
    }

    if (l > 0) generate(str + '(', l - 1, r)
    if (l < r) generate(str + ')', l, r - 1)
  }

  generate('', n, n);
  return result;
};

console.log(generateParentheses(3));
module.exports = {generateParentheses};
