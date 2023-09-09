# Data Structures
- Collections of values, the relationships among them and the functions or operations that can be applied to the data. That all excel in different situations
    - Working with map/location data? Use a graph
    - Web scraping nested HTML? tree
    - scheduler? binary heap

## ES2015 Class Syntax Overview
- Objectives
    - What is a class?
        - A blueprint for creating objects with pre-defined properties and methods
        - JS takes advatnage of prototype based inheritance. JS Classes are primarily syntatactical sugar over JS's existing prototype-based inheritance
        - Purpose: to implent data structures as classes
- Syntax
```JS
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0
    }
    fullName(){
        return `${this.firstName}`
    }
    static enrollStudents(...students){
        //do something. send email to each student
    }
}

let cole = new Student("cole", "sprouse")
cole.fullName(); //calling and invoking instance method
cole.enrollStudents(); //not going to work
Student.enrollStudents(); //will work and be invoked
```
    - The method to create new objects must be called constructor. The class keyword creates a constant.
    - Whatever you pass in the parameters are given as properities to that instance of Student
- Instance Methods
    - provides functionality to the instance of the class
- Class Methods
    - using static keyword. Allows us to define methods that are specific to the class and not just to the instance
        - The static keyword defines a static method for a class. Static methods are called without instantiating their class and connot be called through a class instance. Static methods are often used to create utility functions for an application.
        - not related to a particular instance
```JS
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx,dy);
    }
}
const p1 = new Point(5,5)
const p2 = new Point(10,10)
Point.distance(p1,p2) //7.07
```
    - Using to utilize and work with two instances instead of making the distance first. This is a utility function.
- keyword `this` is referring to the object created form that class or instance
