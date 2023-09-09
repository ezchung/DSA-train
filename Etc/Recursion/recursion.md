# What is recursion

Recursion is a programming technique where a function calls itself to solve a problem.

## How Recursive Functions Work

1. **Invoke the Same Function**: Recursive functions invoke themselves with different inputs until they reach a base case.

### Gameplan for Recursion

- **Base Case**: A condition that marks the end of the recursion.
- **Different Input**: Invoking the recursive function with a different piece of data each time.

## Countdown Example

```javascript
function countDown(num){
    if(num <= 0){
        console.log("All done");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
```

- **Gameplan**:
  - Base case: The end of the line is when `num` is 0.
  - Recursive case: In every recursive call, we decrement `num`.
  - The `return` keyword is the last action before returning.

```javascript  
function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1)
}
```

- **Gameplan**:
    - Base case: when num is 1
    - Diff Input: num - 1
    - rather than ending the loop, base case ends its own function
        - two returns
- **Display**:
    sumRange(3)
        return (3) + sumRange(2)
                   +  2         + sumRange(1)
                                    1

##### NonRecursive
```javascript
function factorial(num){
    let total = 1;
    for(let i = num; i > 0; i--){
        total *= i;
    }
    return total;
}

function factorial(num, total = 1){
    if(num === 1) return total;
    return num * factorial(num-1, total);
}
```

### Helper Method Recursion
- purpose to have a variable that you can manipulate without having to pass into recurse function.
```JS
function outer(input){
    let outerScopedVariable = []

    function helper(helperInput){
        //modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable
}
```

### Part of Graphs Section
```JS
depthFirstRecursive(start){
    result = []
    visited = {}
    ...
    dfs(vertex)
}
```

## Pure Recursion

```JS
function collectOddValues(arr){
    let newArr = [];
    if(arr.length=== 0) return newArr;
    if(arr[0] % 2 !== 0) newarr.push(arr[0])

    newArr = newArr.concat(collectOddValues(arr.slice(1))); //even though every time loop runs, newArr is created. we are concatenating
    return newArr;
}
```

collectOddValues([1,2,3,4,5]);
[1].concat(collectOddValues[2,3,4,5]);
        [].concat(collectOddValues[3,4,5])
            [3].concat(collectOddValues[4,5]);
