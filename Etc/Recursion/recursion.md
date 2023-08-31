What is recursion
- a process that calls itself

How recursive functions work
- Invoke the same function with a different input until you reach your base case

Gameplan
- base case. Or something that is at the end of the line
- different input. the recursive call and each time you are calling it with a different piece of data

function countDown(num){
    if(num <=0 ){
        console.log("All done");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
- Gameplan
    - base case. End of the line is when num is 0
    - every recursive case will get the decremented num
    - Return keyword is the last action

function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1)
}
- Gameplan
    - base case: when num is 1
    - diff input: num - 1
    - rather than ending the loop, base case ends its own function
        - two returns
- Display
    sumRange(3)
        return (3) + sumRange(2)
                   +  2         + sumRange(1)
                                    1

NonRecursive
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

Helper Method Recursion
- purpose to have a variable that you can manipulate without having to pass into recurse function.
function outer(input){
    let outerScopedVariable = []

    function helper(helperInput){
        //modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable
}

**Part of Graphs Section
depthFirstRecursive(start){
    result = []
    visited = {}
    ...
    dfs(vertex)
}

Pure Recursion

function collectOddValues(arr){
    let newArr = [];
    if(arr.length=== 0) return newArr;
    if(arr[0] % 2 !== 0) newarr.push(arr[0])

    newArr = newArr.concat(collectOddValues(arr.slice(1))); //even though every time loop runs, newArr is created. we are concatenating
    return newArr;
}

collectOddValues([1,2,3,4,5]);
[1].concat(collectOddValues[2,3,4,5]);
        [].concat(collectOddValues[3,4,5])
            [3].concat(collectOddValues[4,5]);
