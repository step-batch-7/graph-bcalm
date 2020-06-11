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
  if (!queue || queue.length === 0) return false;
  const currentObj = queue.shift();
  if (currentObj === target) return true;
  visitedList.push(currentObj);
  graph[currentObj] &&
    graph[currentObj].forEach((obj) => {
      if (!visitedList.includes(obj) && !queue.includes(obj)) {
        queue.push(obj);
      }
    });
  return findRelation(graph, visitedList, queue, target);
};

const bfs = function (pairs, source, target) {
  const graph = createGraph(pairs);
  const visitedList = [];
  const queue = graph[source] && [...graph[source]];
  return findRelation(graph, visitedList, queue, target);
};

module.exports = {bfs};
