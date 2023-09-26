const {mode, modeNested} = require('../challenges/mode.js');

describe('mode test', () => {
  let arr;
  it('handles an array of only one (repeated) number', () => {
    arr = [3];
    expect(mode(arr)).toBe(3);
    
    arr = [-7, -7, -7];
    expect(mode(arr)).toBe(-7);
    
    arr = [0, 0, 0, 0];
    expect(mode(arr)).toBe(0);
  });
  
  it('handles an array with an obvious mode', () => {
    arr = [1, 6, 7, 5, 8, 8, 10, 6, 10, 4, 6, 11];
    expect(mode(arr)).toBe(6);
  });
  
  it('chooses the max for an array with several modes', () => {
    arr = [12, 5, 32, 4];
    expect(mode(arr)).toBe(32);
    arr = [3, 1, 1, 1, 3, 7, 3, 3, 1];
    expect(mode(arr)).toBe(3);
  });
});

xdescribe('modeNested test', () => {
  let arr;
  it('handles non-nested arrays', () => {
    arr = [3];
    expect(modeNested(arr)).toBe(3);
    
    arr = [-7, -7, -7];
    expect(modeNested(arr)).toBe(-7);
    
    arr = [0, 0, 0, 0];
    expect(modeNested(arr)).toBe(0);
    
    arr = [1, 6, 7, 5, 8, 8, 10, 6, 10, 4, 6, 11];
    expect(modeNested(arr)).toBe(6);
    
    arr = [12, 5, 32, 4];
    expect(modeNested(arr)).toBe(32);
    
    arr = [3, 1, 1, 1, 3, 7, 3, 3, 1];
    expect(modeNested(arr)).toBe(3);
  });
  
  it('handles nested arrays of only one (repeated) number', () => {
    arr = [[3]];
    expect(modeNested(arr)).toBe(3);
    
    arr = [-7, [[-7], -7]];
    expect(modeNested(arr)).toBe(-7);
    
    arr = [[[0]], 0, 0, 0];
    expect(modeNested(arr)).toBe(0);
  });
  
  it('handles nested arrays that include empty arrays', () => {
    arr = [6, [], 2];
    expect(modeNested(arr)).toBe(6);
    
    arr = [-11, [], [-7, [], [-11]]];
    expect(modeNested(arr)).toBe(-11);
  });
  
  it('handles an array with an obvious mode', () => {
    arr = [1, 6, [7, 5, [8]], 8, [[10, [6]], [], 10, 4], [], 6, 11];
    expect(modeNested(arr)).toBe(6);
  });
  
  it('chooses the max for an array with several modes', () => {
    arr = [12, [5, [32]], 4];
    expect(modeNested(arr)).toBe(32);
    arr = [[[3]], [1, [1], 1, 3], 7, 3, [3, 1]];
    expect(modeNested(arr)).toBe(3);
  });
});
