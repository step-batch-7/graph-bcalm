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

const findRelation = function (graph, visitedList, queue, target) {
  while (queue && queue.length) {
    const currentObj = queue.shift();
    if (currentObj === target) return true;
    visitedList.push(currentObj);
    graph[currentObj] &&
      graph[currentObj].forEach((obj) => {
        if (!visitedList.includes(obj) && !queue.includes(obj)) {
          queue.push(obj);
        }
      });
  }
  return false;
};

const bfs = function (pairs, source, target) {
  const graph = createGraph(pairs);
  const visitedList = [];
  const queue = graph[source] && [...graph[source]];
  return findRelation(graph, visitedList, queue, target);
};

module.exports = {bfs};
