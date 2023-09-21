# Dijkstra's Algorithm
- uses a priority queue as part of solution
- aka Dijkstra's Shortest Path Algorithm
    >> Edsger Dijkstra was a physicist turned Dutch programmer
        - Helped to advance the field of computer science from an "art" to an academic discipline
        - Created new disciplines in computer science
            - Many of his discoveries are still used today
## Objectives
### Importance of Dijkstra's 
    >> Lot of algorithms will be built on top of Dijkstra's 
    >> Finds the shortest path between two vertices on a graph
        >> what's the fastest way to get from point A to point B
    >> Useful BC
        >> GPS - finding fastest route
        >> Network Routing - finds open shortest path for data
        >> Biology - used to model the spread of vbiruses among humans
        >> Airline Tickets - finding cheapest route to your destination

### Implement weighted graph
```JS
class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    //Currently not implementing removing cause not important in created enviornment for Dijkstra's
}

{
    "A": [{node: "B", weight: 10}, {node:"C", weight: 5}]
}
```
### Walk through Dijkstra's
The approach
1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
2. Once we've moved to the node we're going to visit, we look at each of its neighbors
3. For each neighboring node, we calculate the distance by suimming the total edges that lead to the node we're checking from the starting node
4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node

##### Data Points (Find Shortest Path from A to E)
Round 1
Visited = []
Previous: 
    {
        A: null,
        B: null,
        C: null,
        D: null,
        E: null,
        F: null
    }

Current Path:
Vertex          Shortest Dist from A
A               0
B               Infinity
C               Infinity
D               Infinity
E               Infinity
F               Infinity

Round 2
Visited = [A]
Previous: (the way we got to "LETTER" when shortest distance is updated)
    {
        A: null,
        B: A,
        C: A,
        D: null,
        E: null,
        F: null
    }

Current Path:
Vertex          Shortest Dist from A
A               0
B               Infinity ==> 4
C               Infinity ==> 2
D               Infinity
E               Infinity
F               Infinity

Round 3
Visited = [A, C]
Previous: (the way we got to "LETTER" when shortest distance is updated)
    {
        A: null,
        B: A,
        C: A,
        D: C,
        E: null,
        F: C
    }

Current Path:
Vertex          Shortest Dist from A
A               0
B               Infinity ==> 4
C               Infinity ==> 2
D               Infinity ==> 2+2 = 4
E               Infinity
F               Infinity ==> 6

Round 4
Visited = [A, C, B] 
Previous: (the way we got to "LETTER" when shortest distance is updated)
    {
        A: null,
        B: A,
        C: A,
        D: C,
        E: B,
        F: C
    }

Current Path:
Vertex          Shortest Dist from A
A               0
B               Infinity ==> 4
C               Infinity ==> 2
D               Infinity ==> 2+2 = 4
E               Infinity ==> 4+3 = 7
F               Infinity ==> 6

Round 5
Visited = [A, C, B, D] 
Previous: (the way we got to "LETTER" when shortest distance is updated)
    {
        A: null,
        B: A,
        C: A,
        D: C,
        E: B,
        F: D
    }

Current Path:
Vertex          Shortest Dist from A
A               0
B               Infinity ==> 4
C               Infinity ==> 2
D               Infinity ==> 2+2 = 4
E               Infinity ==> 4+3 = 7
F               Infinity ==> 6      ==> 5
**Path to E is ignored as it is not less than 7

Round 6
Visited = [A, C, B, D, F] 
Previous: (the way we got to "LETTER" when shortest distance is updated)
    {
        A: null,
        B: A,
        C: A,
        D: C,
        E: F,
        F: D
    }

Current Path:
Vertex          Shortest Dist from A
A               0
B               Infinity ==> 4
C               Infinity ==> 2
D               Infinity ==> 2+2 = 4
E               Infinity ==> 4+3 = 7 ==> 6
F               Infinity ==> 6       ==> 5
**Path to E is changed as F to E is shorter than B to E

Shortest Path is 
Steps Breakdown
- Pick the current shortest destination spot that we haven't visited
- Explore each of its neighbors
- Calculate the new shortest distance. Make change
- Work backwards in previous

Checked visited first and looked at current path to decide which neighbor to use that has the current shortest path. 
Then looked at current path and look at neighbors and then update accordingly.
If change was made in current path, update previous

E <= F <= D <= C <= A == A to C to D to F to E

### Implement Dijkstra's using a naive priority queue
Deciding next node to visit is where the priority queues come in
```JS
class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    };
    dequeue(){
        return this.values.shift();
    };
    sort(){
        this.values.sort((a,b) => a.priority - b.priority) //greatest to lowest
    };
}
```
The goal is always to get the smallest value out first 

### Dijkstra's PsuedoCode
Function should accept a starting and ending vertex
Create object (distances) and set each key to be every vertex in the adjacency list with a vlaue of infinity, except for the starting vertex which is 0
After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin
Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
Start looping as long as there is anything in the priority queue. as long as there is something to visit
    dequeue a vertex from the priority queue
    if that vertex is the same as the ending vertex - we are done
    Otherwise loop through each value in the adjacency lsit at that vertex
        Calculate the distance to that vertex from the starting vertex
        if the distance is less than what is currently stored in our distances object
            update the distances object with new lower distance
            update the previous object to contain that vertex
            enqueue the vertex with the total distance from the start node

### Implementing Dijkstra's 
```JS
class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    };
    dequeue(){
        return this.values.shift();
    };
    sort(){
        this.values.sort((a,b) => a.priority - b.priority) //greatest to lowest
    };
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    
    Dijkstra(start,finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; //to be returned at the end
        let smallest;
        //build up initial state
        //looping over adjacencyList
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0); //since this is where we begin
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity); //into priority queue
            }
            previous[vertex] = null;
        }

        //as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val; //{node: B, priority: Infinity}. Getting the val
            if(smallest === finish){
                //done
                //build path to return
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighborIdx in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighborIdx] //{node:F, weight:5}
                    //this.adjacencyList[smallest] ==> [{node:F, weight: 5},...]
                    //calculate new distance
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        console.log(path)
        return path.concat(smallest).reverse();
    }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

graph.Dijkstra("A","E");
```

### Upgrading Dijkstra's using a binary heap priority queue
```JS
class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        //Edge case (when one element left, without this "if condition" code, reinserting the end)
        if(this.values.length > 0){
            this.values[0] = end;
            //trickle down
            this.sinkDown();
    }
    return min;
  }
  sinkDown(){
    let idx = 0;
    const len = this.values.length;
    const element = this.values[0];
    while(true){
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if(leftChildIdx < len) {
            leftChild = this.values[leftChildIdx];
            if(leftChild.priority < element.priority){
                swap = leftChildIdx;
            }
        }
        if(rightChildIdx < len) {
            rightChild = this.values[rightChildIdx];
            if(
                (swap === null && rightChild.priority < element.priority) || 
                (swap !== null && rightChild.priority < leftChild.priority)
            ){
                swap = rightChildIdx;
            }
        }
        if(swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
    }
  }
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    
    Dijkstra(start,finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; //to be returned at the end
        let smallest;
        //build up initial state
        //looping over adjacencyList
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0); //since this is where we begin
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity); //into priority queue
            }
            previous[vertex] = null;
        }

        //as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val; //{node: B, priority: Infinity}. Getting the val
            if(smallest === finish){
                //done
                //build path to return
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighborIdx in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighborIdx] //{node:F, weight:5}
                    //this.adjacencyList[smallest] ==> [{node:F, weight: 5},...]
                    //calculate new distance
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}
```