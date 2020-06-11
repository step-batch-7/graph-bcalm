const assert = require('assert');
const {bfs} = require('../src/graph');
const data = require('../data.json');

describe('bfs()', function () {
  it('should return false if source and target are not connected', function () {
    assert.strictEqual(bfs(data, 'bb', 'jj'), false);
    assert.strictEqual(bfs(data, 'mm', 'jj'), false);
  });
  it('should return true if source and target are connected', function () {
    assert.ok(bfs(data, 'jj', 'aa'));
    assert.ok(bfs(data, 'aa', 'hh'));
    assert.ok(bfs(data, 'hh', 'ii'));
    assert.ok(bfs(data, 'ii', 'ee'));
    assert.ok(bfs(data, 'ee', 'mm'));
  });
  it('should return true if it is connected to itself', function () {
    assert.ok(bfs(data, 'aa', 'aa'));
  });
  it('should return false if it is not connected to itself', function () {
    assert.strictEqual(bfs(data, 'zz', 'zz'), false);
  });
  it('should return false if edge is not present', function () {
    assert.strictEqual(bfs(data, 'xx', 'xx'), false);
  });
});
