// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, P, B, E) {
    // Implement your solution here
    let scene = createScene(A,P)

    let cranes = Object.values(scene);

    let check = checkReach(B, E, cranes)

    return check;
}

function createScene(arms, positions){
    let scene = {}
    for(let i = 0; i < arms.length; i++){
        let armLen = arms[i];
        let position = positions[i];
        scene[i] = [position-armLen, position+armLen];
    }
    return scene;
}

function checkReach(start, end, cranes){
    let direction;
    if(end - start > 0) direction = true;
    else direction = false;

    let psuedoStart = start;

    while(psuedoStart !== end){
        craneCanTouch = true;
        if(craneCanTouch === false) return false;
        for(let range of cranes){
            if(direction){
                if(psuedoStart >= range[0] && psuedoStart <= range[1]){
                    if(end >= range[0] && end <= range[1]) return true
                    else{
                        craneCanTouch = true;
                        pseudoStart = range[1]; 
                        //Achknowledge that there is a bug with when there are more than one same crane
                    }
                }else craneCanTouch = false;
            }else{
                if(psuedoStart >= range[0] && psuedoStart <= range[1]){
                    if(end >= range[0] && end <= range[1]) return true
                    else{
                        craneCanTouch = true;
                        pseudoStart = range[0]; 
                        //Achknowledge that there is a bug with when there are more than one same crane
                    }
                }else craneCanTouch = false;
            }
        }
    }
}

/**
 * Problem: Input : array of nums (arm length), array of ints (position), start position, end position
 * Based on the crane or the position array and arm array, determine whether we can move the item in the start position to the end position.
 * 
 * Notes:
 * Can use multiple cranes. There will no negative numbers. Everything comes as an integer
 * End can sometimes be greater than Start.
 * 
 * Code Template
 * function createScene(A,P)
 *  create an object with each paired together
 *  get index as key and value as [(position[i]-arm length[i]),(position[i]+arm length[i])] //This is bounds
 * 
 * function checkReach(B,E, entries)
 *  determine which direction
 * 
 *  while start is not equal to end
 *      craneCanTouch = true //The state
 *      if(craneCanTouch is false), return false
 *      
 *      iterate through entries
 *          if direction is positive so needs to go higher
 *              if start is in bounds & end is also in bounds
 *                  return true
 *              else if start is in bounds
 *                  craneCanTouch = true
 *                  reassign start to the highest bound of that crane
 *          else if negative direct
 *              if start is in bounds & end is in bounds, return true
 *              else if only strat is in bounds
 *                  craneCanTouch = true
 *                  reassign start to the lowest bound of the crane
 *              else, craneCanTouch = false
 *      
 * function solution
 *  pass in A & P to createScene
 *  create entries
 *  invoke checkReach(B, E, entries)
 *  return result of checkReach
 */