// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {numIslands} = require(`../challenges${version}/num-islands.js`);

describe('numIslands test', () => {
  let grid;
  it('handles single-element trivial cases', () => {
    grid = [[1]];
    expect(numIslands(grid)).toBe(1);
    grid = [[0]];
    expect(numIslands(grid)).toBe(0);
  });
  
  it('handles single-rows or single-columns', () => {
    grid = [[1, 1, 0, 0, 0, 1, 0]];
    expect(numIslands(grid)).toBe(2);
    grid = [[0, 1, 1, 1, 0, 1, 0, 1, 1]];
    expect(numIslands(grid)).toBe(3);
    grid = [[1], [1], [0], [0], [1], [0]];
    expect(numIslands(grid)).toBe(2);
    grid = [[0], [1], [1], [1], [0], [1], [0], [1], [1]];
    expect(numIslands(grid)).toBe(3);
  });
  
  it('handles the general case', () => {
    grid = [
      [0, 1, 1, 1, 0],
      [1, 1, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    expect(numIslands(grid)).toBe(1);
    grid = [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1]
    ];
    expect(numIslands(grid)).toBe(3);
    grid = [
      [1, 1, 1, 1, 1],
      [1, 1, 0, 0, 1],
      [1, 0, 0, 0, 1],
      [1, 1, 1, 1, 1]
    ];
    expect(numIslands(grid)).toBe(1);
    grid = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];
    expect(numIslands(grid)).toBe(0);
    grid = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ];
    expect(numIslands(grid)).toBe(1);
  });
});

