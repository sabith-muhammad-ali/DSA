class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) {
      this.list[vertex] = new Set();
    }
  }

  addEdge(vertex, edge) {
    this.addVertex(vertex);
    this.addVertex(edge);
    this.list[vertex].add(edge);
    //for bidirectional
    // this.list[edge].add(vertex)
  }

  remove(vertex, edge) {
    this.list[vertex].delete(edge);
  }

  removeVertex(vertex) {
    for (let value of this.list[vertex]) {
      this.remove(vertex, value);
    }
    delete this.list[vertex];
  }

  dfs(start) {
    let stack = [];
    let visited = {};
    stack.push(start);

    while (stack.length) {
      let vertex = stack.pop();
      console.log(vertex);

      if (!visited[vertex]) {
        visited[vertex] = true;

        let nearData = this.list[vertex];

        for (let value of nearData) {
          if (!visited[value]) {
            stack.push(value);
          }
        }
      }
    }
  }

  bfs(start){
    let queue = []
    let visited = {}
    queue.push(start)

    while (queue.length) {
        const vertex = queue.shift()
        console.log(vertex);

        if (!visited[vertex]) {
            visited[vertex] = true

            let nearData = this.list[vertex]

            for(let value of nearData){
                if (!visited[value]) {
                    queue.push(value)
                }
            }
        }
    }
  }

  display() {
    for (let vertex in this.list) {
      console.log(vertex + "---->" + [...this.list[vertex]]);
    }
  }
}
const graph = new Graph();
graph.addEdge(1, 3);
graph.addEdge(1, 2);
graph.addEdge(2, 4);
graph.addEdge(3, 5);
// graph.addVertex(10)
// graph.remove(1,2)
// graph.removeVertex(1)
graph.dfs(1);
// graph.bfs(1)
// graph.display()
