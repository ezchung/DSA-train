/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    
};

/*
Problem: How many different sets of cars arrive throughout the process?

Notes:
A car can never pass another car.
- so only if the car ahead catches up to a car before it, technically car behind the first cannot pass
the higher the position, the more ahead it is.
Target number is the position


Psuedo
Stack
if position is only one, return 1
else
create stack

Others
- create an array to signify positions
- idea is that every iteration, each position is given its miles gained.
    - once we see the target number reached, any number at that target number is removed and continues til target number is exceeded or reached 

*/