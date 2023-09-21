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
### Implement Dijkstra's using a binary heap priority queue