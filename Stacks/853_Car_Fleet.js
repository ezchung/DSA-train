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
once they meet, faster car will slow down


Code Notes
Stack
if position is only one, return 1
else
create stack (LIFO)


Others
- create an array to signify positions
- idea is that every iteration, each position is given its miles gained.
    - once we see the target number reached, any number at that target number is removed and continues til target number is exceeded or reached 

- once one meets the previous, must stay together and faster car's speed is brought down to slower car speed. 
    - if another car catches up, then the two that are already there are given slower speed.

create a tuple array of position and speed
- insert into stack
- position keeps getting added based on speed
- if the one behind catches up, then speed is changed to be slower speed compared to the two and categorized as one, meaning we can remove one of them.

Intuition 
- calculate the finish time of each car(if they do not get blocked) 
    - if car A were before B initially, but A's finish time is less than or equal to B's, then A & B must be same fleet
>>Sort cars by initial position in dcrs order
>>First car leads a fleet. first car is current leader
>>iterate to next cars and see if they belong with current leader fleet
>>if car X violates the condition, X is new leader and repeat.
----Number of fleets is the number of updates to current leader

Pseudo
if position is one, return 1
else
organize the position and speed
create array of tuples where position and speed are aligned
create stack = []
iterate through the array of pairs
    get position, speed, time
    **time is the (target-position)/speed
    push time into stack
    if stack length is greater than 2 and end of stack is less than one before
        **end of stack <= [stack.len-2] bc time is less than one that had a greater starting point. Caught up
        pop stack
*/