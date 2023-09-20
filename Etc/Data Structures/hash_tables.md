# Hash Tables
- Aka hash maps
    - Built into every programming language out there
### What a hash table is
- Used to store key-value pairs
- Like arrays, but the keys are not ordered
- Unlike arrays, hash tables are fast for all the following operations: finding, adding, and removing
- Hash Tables in the World
    - Python - Dictionaries
    - JS = Objects & Maps
    - Java,Go & Scale have maps
    - ruby hash hashes
#### Introductory Examples
- if the built in hash tables did not exist
Imagine we want to store some colors
- Could just use an array/list
    - But this is not readable 
    - Would be nice if instead of using indices to access the colors, we could use more human readable keys
        - colors["cyan"] easier than colors[2]
### Hashing Algorithm
- What makes a good hashing algorithm
- Colloisions in a hash table
- Handling collisions using separate chaining or linear probing
