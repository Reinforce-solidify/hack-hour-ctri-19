# Using TypeScript for Hack Hour Challenges

*Note: If you have not yet gone through the TypeScript module, don't worry about this!*

From this point on, whenever a new hack hour challenge is released, we'll include both JavaScript and TypeScript files for that challenge. You should still focus on completing the challenge in JavaScript first - but if you have time and want an extra challenge, we encourage you to try it out using TypeScript!


### Steps for completing TypeScript challenges

- [ ] Navigate to `/challenges/typescript` and write your solution in the file `<challenge-name>.ts`
- [ ] Use the command `tsc <challenge-name>.ts` to compile your solution. This will output a JavaScript file with the same name in the `typescript` directory.
  - Example: `tsc doubly-linked-list.ts`
- [ ] To test your TypeScript solution, run `npm run test-hh <challenge-name> typescript`. This will run the challenge's test file as usual, but the inclusion of the `typescript` argument will tell it to import your newly compiled TypeScript solution rather than the default JavaScript solution.
  - Example: `npm run test-hh doubly-linked-list typescript`
