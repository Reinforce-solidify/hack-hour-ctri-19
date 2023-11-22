// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {generateParentheses} = require(`../challenges${version}/generate-parentheses.js`);

describe('generateParentheses test', () => {
  let output;
  const normalize = results => results.sort();
  
  it('generates combinations of well-formed parentheses', () => {
    output = ['(())', '()()'];
    expect(normalize(generateParentheses(2))).toEqual(normalize(output));
    output = ['((()))', '(()())', '(())()', '()(())', '()()()'];
    expect(normalize(generateParentheses(3))).toEqual(normalize(output));
  });
  
  it('handles base cases', () => {
    output = [''];
    expect(normalize(generateParentheses(0))).toEqual(normalize(output));
    output = ['()'];
    expect(normalize(generateParentheses(1))).toEqual(normalize(output));
  });
});
