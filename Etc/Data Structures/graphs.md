# Graphs
### What is a graph
- Collection of nodes and connections between those nodes
### Compare and contrast different types of graphs and use cases in real world
- Social Networks/ locations or mapping / routing algorithms / visual hierarchy / file system optimizations /recommendations
### Types of Graphs
- Terminology
    - Vertex = a node
    - Edge = connection between nodes
    - Weighted / Unweighted = Information about the connection is weighted
    - Directed / Undirected = about the edges. Undirected has two way connections
        - Instagram Followers would be directed. Facebook Friends is undirected
### Implement graph using adjacency list
Adjacency List vs Adjacency Matrix
- Big O
Operation       AL          AM
Add Vertex      O(1)        O(|V^2|)
Add Edge        O(1)        O(1)
Remove Vertex   O(|V + E|)  O(|V^2|)
Remove Edge     O(E)        O(1)
Query           O(|V + E|)  O(1)
Storage         O(|V + E|)  O(|V^2|)

Adjancey List
- Can take up less space (in sparse graphs)
- Faster to iterate over all edges 
- Can be slower to loopup specific edge

Adjancey Matrix
- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specific edges

```JS
// Building Undirected Graph
class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    //Add Vertex
    /*
    PsuedoCode
        Write method called addVertex that accepts name of a vertex
        should add a key to the adjacency list with the name of the vertexc and set its  value to be an empty array
    */
    addVertex(val){
        if(!this.adjancyList[val]){
            this.adjancyList[val] = [];
        }
    }

    //Add Edge
    /*
    PseudoCode
        Write method called addEdge that accepts two vertices
        functions finds in the AL the key of vertex1 and push vertex2 to the array
        function should find in the AL the key of vertex2 and push vertex1 to the array
    */
   addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
   }

   //Remove Edge. Remove connection between two
   /*
   PseudoCode
        should accept two vertices
        reassign the key of vertex1 to be an array that does not contain vertex2
        reassign the key of vertex2 to be an array that does not contain vertex1
   */
  removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        ); //There will be an error when v1 does not exist. filtering on an undefined
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
  }

  //Remvoe Vertex
  /*PseudoCode
        Accepts a vertex to remove
        Should loop as long as there are any other vertices in the adjacency list for that vertex
        Inside of the loop, call removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
        delete the key in the adjacency list for that vertex
  */
    removeVertex(vertex){
        let edges = this.adjacencyList[vertex];
        for(let i = 0; i < edges.length; i++){
            this.removeEdge(edges[i], vertex);
        }
        // while(this.adjacencyList[vertex].length){
        //     const adjacentVertex = this.adjacencyList[vertex].pop();
        //     removeEdge(adjacentVertex, vertex);
        // }
        delete this.adjacencyList[vertex];
    }
}
```
### Traverse using BFS and DFS

### Compare and contrast graph traversal algorithms