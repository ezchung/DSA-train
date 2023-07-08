/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    
};

/**
Problem
Create an array of number of days/idx we need to go past to reach a higher number than the number at the current idx.

Notes 
Higher the warmer
end will always be 0

Psuedo Monotonic Decreasing Stack bottom up

res = array(temp len).fill[0]
stack = [] 
for idx in temperatures
    while stack exists and temp[idx] > (greater than) the most recent element on stack[-1][0] which gets the temp
        let temp, stackIdx = stack.pop()
        res[stackIdx] = (idx-stackIdx)
    //otherwise, add to stack
    stack.push([temperatures[idx], idx])
return res
*/

/** Accepted - bottom up***/
var dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length).fill(0)
    let stack = [];
    for(let idx in temperatures){
        while(stack.length && temperatures[idx] > temperatures[stack[stack.length-1]]){
            let stackIdx = stack.pop();
            res[stackIdx] = idx - stackIdx;
        }
        stack.push(idx);
    }
    return res;
};

/** Psuedo1
Seems like recursive stack problem where which each date we continue and look for the dates.
main function
len = temperatures.length;
let res = new Array(len).fill(0)
recursion(currentNumDay,idx, res,temperatures)

recursive stack function
stack would require me to create along the way and assign the correct position
**Maybe instead of waitDays, can do height of stack
base case
    if temp[currentNumDay] > temp[idx]
        get height of stack and add the height to res[idx]
        return
    if currentNumDay >= temperatures.length/res.length
        return
    if temp[currentNumDay] < temp[idx]
        add to stack
        recursion(currentNumDay+1, idx, res, temps, stack)
*/

var dailyTemperaturesTP = function(temperatures) {
    let len = temperatures.length;
    let res = new Array(len).fill(0);
    let lP = 0,
        rP = 1;
    while(lP !== temperatures.length-1){
        if(rP === temperatures.length-1 && temperatures[rP] <= temperatures[lP]){
            res[lP] = 0;
            lP++;
            rP = lP +1;
        }else if(temperatures[rP] > temperatures[lP]){
            let waitDays = rP - lP;
            res[lP] = waitDays;
            lP++;
            rP = lP+1;
        }else{
            rP++
        }
    }
    return res;
};

/** Works but not efficient

Psuedo
two pointers (not as efficient as stack)
leftP, rightP = 0, 1
while i !== temp.length-1
    if j == temp.length-1 && temp[j] < i
        res[i] = 0
        i++
        j = i+1
    else if j > i ie higher temperature
        let waitDays = j-i
        res[i] = waitDays
        i++
        j = i+1
    else j++
return res
 */

/**
 * Not working due to stack overflow
 */
var dailyTemperaturesStackOverflow = function(temperatures) {
    let len = temperatures.length;
    let res = new Array(len).fill(0)
    getWaitDaysSO(0,0,res, temperatures, [])
    return res;
};
//Currently not iterating through everything. Idx is not moving
let getWaitDaysSO = (currentNumDay, idx, res, temps, stack) => {
    //Idx should move up if idx is not at the end
    if(temps[currentNumDay] > temps[idx]){
        let waitDays = stack.length;
        res[idx] = waitDays;
        if(idx !== temps.length){
            let newCurrent = idx + 1
            getWaitDaysSO(newCurrent,newCurrent, res, temps, []);
        }
        return
    }
    //If at the end of the temps array and reached here, means none greater
    //Idx should move up if idx is not at the end
    if(currentNumDay >= temps.length){
        if(idx !== temps.length){
            let newCurrent = idx + 1
            getWaitDaysSO(newCurrent,idx+1, res, temps, []);
        }
        return
    }
    //If colder or equal to, add to stack and continue. idx stays the same
    if(temps[currentNumDay] <= temps[idx]){
        stack.push(temps[currentNumDay]);
        getWaitDaysSO(currentNumDay+1,idx, res, temps, stack);
    }
    return res
}
