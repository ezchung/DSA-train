/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    
};

/**
Question
    Get the key and the message (already encoded)
    Decode the message and return the message translated

PsuedoCode
    take out anything that is not a character from the key
    make it a set so no duplicates
    create an alphabet string
    create an object
    create a variable to keep track of alphabet pointer
    create return message string
    iterate through message
        identify the location of the char
        with that index, go to alphabet[index] and add that char to msg
*/