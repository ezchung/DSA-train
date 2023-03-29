/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sortS = s.toLowerCase().split("").sort().join("");
    let sortT = t.toLowerCase().split("").sort().join("");
    return sortS === sortT;
};

/**
PsuedoCode
Create a sorted map and check to see if the maps are equal
or sort string and check if the two are equal
*/