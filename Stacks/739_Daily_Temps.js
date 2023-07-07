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