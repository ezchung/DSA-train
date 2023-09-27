/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    if(position.length === 1) return 1;
    if(position.length === 0) return 0;
    //zip cars and then sort them
    let zipped = zipAndSortCars(position,speed, target)
    let firstCarDist = (target-zipped[0][0])/zipped[0][1]; //get car that is most ahead in position

    let fleetStack = [firstCarDist]; 
    for(let idx=1; idx < zipped.length; idx++){
        let carDistance = zipped[idx][2];

        let fleetStackLatestCalc = fleetStack[fleetStack.length-1];
        //fleetStack.push(carDistance)

        if(carDistance > fleetStackLatestCalc){ //if car reaches the destination before
            fleetStack.push(carDistance);
        }

    }
    return fleetStack.length;
};

let zipAndSortCars = function(position,speed, target){
    let zipped = [];
    for(let i in position){
        let timeToReach = (target-position[i])/speed[i]
        zipped.push([position[i], speed[i], timeToReach]);
    }
    let sorted = zipped.sort((a,b) => b[0] - a[0]); //in descending order
    return sorted;
}



/*
/*
Problem: How many different sets of cars arrive throughout the process?
Stack Problem

Notes:
A car can never pass another car.
- so only if the car ahead catches up to a car before it, technically car behind the first cannot pass
the higher the position, the more ahead it is.
Target number is the position
once they meet, faster car will slow down
    so its not even by hour
        have to remember if the position has someone there already
        if something at the beginning of the hour was behind another car and at the end of the hour passed the car, the car ahead must back up to the car behind


PsuedoCode Linear Time
Notes
- Calculate the intersection time?
- Calculate what time each car reaches destination?
    - if car that started behind, reaches earlier or reaches at the same time, must have become a fleet
        (10-7)/1 = 3 hours to reach
        (10-5)/2 = 2.5 hours to reach
        the one that is ahead has the slower time and will be the new speed so we can get rid of that second car.
        (10-3)/3 = 2.3
        go from right to left. (higher starting position to the end) iterate in reverse order
stack is initially empty
    add from back, 
    if exceeds, then take the first

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