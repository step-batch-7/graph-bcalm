const assert = require('assert');
const {bfs} = require('../src/graph');
const data = require('../data.json');

describe('bfs()', () => {
  it('should return false if source and target are not connected', () => {
    assert.equal(bfs(data, 'bb', 'jj'), false);
    assert.equal(bfs(data, 'mm', 'jj'), false);
  });
  it('should return true if source and target are connected', () => {
    assert.ok(bfs(data, 'jj', 'aa'));
    assert.ok(bfs(data, 'aa', 'hh'));
    assert.ok(bfs(data, 'hh', 'ii'));
    assert.ok(bfs(data, 'ii', 'ee'));
    assert.ok(bfs(data, 'ee', 'mm'));
  });
  it('should return true if it is connected to itself', () => {
    assert.ok(bfs(data, 'aa', 'aa'));
  });
  it('should return false if it is not connected to itself', () => {
    assert.equal(bfs(data, 'oo', 'oo'), false);
  });
  it('should return false if edge is not present', () => {
    assert.equal(bfs(data, 'nn', 'nn'), false);
  });
});
