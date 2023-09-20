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
### Traverse using BFS and DFS
### Compare and contrast graph traversal algorithms