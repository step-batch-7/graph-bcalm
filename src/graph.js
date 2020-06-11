const createGraph = function (data) {
  return data.reduce((graph, connection) => {
    const [src, dest] = connection;
    if (!graph[src]) {
      graph[src] = [];
    }
    graph[src].push(dest);
    return graph;
  }, {});
};

const bfs = function (pairs, source, target) {
  const graph = createGraph(pairs);
  const visitedList = [];
  const queue = [];
  queue.push(source);
  while (queue.length) {
    const currentObj = queue.shift();
    if (currentObj === target) return true;
    visitedList.push(currentObj);
    graph[currentObj] &&
      graph[currentObj].forEach((city) => {
        if (!visitedList.includes(city) && !queue.includes(city)) {
          queue.push(city);
        }
      });
  }
  return false;
};

module.exports = {bfs};
