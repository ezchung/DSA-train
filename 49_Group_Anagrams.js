/*
  Problem
  - Group anagrams together. 
  - We get a list of strings and with each string, we group them by their anagram and return a list of groups of anagrams

  Test Case

  PsuedoCode
  - Create a list that will be returned
  - Get each word and sort them by alphabet and check to see if that anagram has been seen
  - if it has been seen, add to the correct list
  
  - create an Object
    {
        "ant" : [nat, tan]
    }
  - create a returning list 
  
  iterate through strs
    sort the strs by alphabet
    check if sorted str exists in Object
        if it does, add str as value
        if it doesnt, add sorted str as key and str as value
  get the object.values
  add them to list and return  
*/