const assert = require('assert');
const data = require('../data.json');
const {bfs} = require('../src/graph');

describe('#bfs', () => {
  it('should give true if there is any path between two objects', () => {
    const actual = bfs(data, 'jj', 'aa');
    const expected = true;
    assert.equal(actual, expected);
  });

  it('should give false if there is no path between two objects', () => {
    const actual = bfs(data, 'bb', 'jj');
    const expected = false;
    assert.equal(actual, expected);
  });

  it('should give true if a single node is connected to itself', () => {
    const actual = bfs(data, 'nn', 'nn');
    const expected = true;
    assert.equal(actual, expected);
  });
});
