# Introduction-of-Javascript

Number and Numberic Operators
The Number data type in JavaScript allows you to play with numbers including the ability to perform mathematical computation between 2 or more operands. Unlike other languages, the Number datatype allows you to work with integers and floating-point numbers without any differentiation as such.

BigInt in JavaScript
BigInt in JavaScript is a built-in data type that provides a way to represent numbers bigger than 253 + 1. This is useful when you have to work with astronomical numbers such as distance between galaxies.

Playing with Strings 
Strings are essentially alphanumeric data that is stored by enclosing them within a pair of single or double quotes. So, English language sentences and words are perfect examples of Strings.

Booleans
The Boolean datatype can be used to store binary values such as true or false. This can be correlated with binary number like 0's and 1's or simply On and Off.

Arrays
JavaScript arrays are used to store multiple values in a single variable There are a number of ways to iterate through arrays in JavaScript. The Array prototype offers built-in methods that can help you iterate through and process data stored in an array.
 
Equality vs Inequality
The Equality operator checks whether the two operands are equal or not. It results in returning a Boolean result.

Using Relational Operators
Relational Operators are the operators that are used to test a relationship such as less than or greater than etc. Numeric comparisons are required frequently in software development and relational operators fill that space.

Handling Exceptions
The try and catch statement is used in JavaScript that allows us to define a block of code to be tested for error while it is being executed. Then comes the catch statement which allows us to define a block of code to be executed if any error is observed. You can handle the error as you please, using the catch block.

Understanding var
We’ve been var for creating variables all along. Variables created using var follow function scope, i.e. they remain visible in the lexical environment and boundaries of a function inside of which they were created.

Block Scoped Variables with let 
While variables created using the var keyword offer function scope, you can also get block scoped variables that stay visible within the limits of a block, denoted by a pair of {…}. A variable created using let for instance stays visible only within the confines of a block or the expression, if created inside of one. Additionally, variables created using let do not pollute the global scope which means they're safer than the ones created using var.

Creating Constants with Const 
Constants cannot be reassigned and that means once declared their value is set in stone, well almost. You see while a constant, created using the const keyword cannot be reassigned a literal value, in the case of data structures such as Arrays and Objects, you do get to modify the contents of the said structure. So, a property within an object assigned to a constant can indeed be mutated. This is important to understand. Besides this, constants behave like variables created using let and are thus block scoped.

Type Conversion
When working with different data types, there are situations where JavaScript is able to automatically convert data type for uniformity. This is known as automatic type conversion and is something that won’t work in all situations. For instance, 2 + "2" returns "22" whereas 2 - "2" is computed as 0. In the former, the numeric 2 is automatically converted to a String whereas in the latter, the String "2" is converted to a Number. So instead of relying on automatic type conversion, we can also manually coerce a type, thereby stabilizing and bringing uniformity to a computational process that requires operands to be in a specific data type and a situation where we cannot guarantee.

Decision-making with 'if-else' 
Conditional statements such as the if-else allow us to implement decision based flow control in code, which is a critically essential process. There are numerous ways to implement conditional flow control and if-else represents the most fundamental of them all. Start by opening up the main.js file. You'll see a variable named temperature which is set to 20. If the value of this variable is less than 15, let's output “It’s cold outside” and if its higher, then we’ll output “It’s warm outside”

Lots of Choices with 'else if'
The if-else conditional can be chained together using an else which lets you handle multiple conditions easily. If the first set of conditions are not met, the control jumps to the else block, where you can have another if statement to handle the second set of conditions and this can keep going.

Switch
The switch-case statement allows you to work with several flavors of a given condition to switch the flow of control. It also allows you to map multiple conditions to a common outcome. Let's work with one of the examples we saw in the video where we will implement a switch-case to identify the type of vegetable or fruit, provided to the script.

Ternary Operator 
The conditional (ternary) operator takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsely. 

Binary Logical Operators
Logical operators allow us to test multiple Boolean conditions to produce a consolidated result. For instance, the && (AND) will execute the expression on the right if both expressions evaluate as true. On the other hand, the || (OR) operator will execute the expression on the right, if the expression on the left evaluates to a false.

Nullish Coalescing Operator
The logical OR (||) operator returns the expression on the right-hand side when the expression on the left evaluates to a false, 0, null or undefined. This may not be ideal in situations where you’re only meant to provide an alternative when the expression on the left is either null or undefined such as when a specific piece of data is missing.

Optional Chaining Operator
When accessing deeply nested properties in an object, it becomes necessary to validate the presence of intermediate properties that lead to the property being accessed. If one of the intermediate properties is missing, then an error is raised. This often requires validating each intermediate property and this can get quite tedious. This is where the optional chaining operator comes into the picture. Let's see this in action.

Function Declarations
Functions provide a way to compose together multiple statements and expressions as one reusable action. A function can accept parameters which are like inlets, letting you pass data to a function for processing. Once processed, the return keyword may be used to send data back to the caller.

Function Expressions
Function expressions are yet another way to create functions, however, in this case, the function is assigned to a variable. Unlike function declarations, a function expression isn’t hoisted to the top of its lexical environment and is only available for use after it has been declared in code.

The 'this' Keyword & Function Execution Context
The 'this' keyword in a function provides access to the context within which the function is executed. This let's a function access data from the context. The benefit - A reusable function can be made to execute in the context of multiple objects where it can access data from that object using the ‘this’ keyword.

Arrow Functions
Arrow functions offer a leaner and simpler syntax for expressing functions as expressions. The use of a fat arrow (=>) and the absence of the function keyword makes up for the syntax of an arrow function which is, in effect anonymous functions. What makes arrow functions different is that they do not create their own ‘this’ context and access the 'this' context of their parent function. Let's build arrow functions to understand their syntax and the way it accesses the ‘this’ context.

Constructor Functions
A constructor function can be used for generating Objects programmatically by invoking functions that accept values of a pre-configured set of properties, as parameters. One of the key things to keep in mind is that constructor function names should begin with an upper-case character. These functions provide an easy way to generate template objects by simply ingesting a set of parameters. In such a situation, you can pre-define the template object by way of properties on the 'this' context of the constructor function. For instance, let's say we need to construct an object with named Person with properties firstName, lastName, age, email and two functions namely introduction() which should introduce the person with the first name and age, and canDrive() which should tell us if the person is eligible to drive or not (age >= 18)

Default Parameters
If a function is invoked without passing all arguments that are necessary for computation, you are bound to get incorrect results or even errors. The traditional way to solve this problem is to implement a series of checks in the function’s body and provide alternate values if arguments are missing, in which case they’re undefined. Now of course, you don’t need to do all that. Default parameters, as a feature has been designed to address missing arguments by providing a default value which will be automatically substituted if the said argument is missing value or is provided with undefined or null as values.

Using the 'for' Loop
Loops allow you to iterate through a set of instructions. The for-loop is the most fundamental loop in JavaScript and allows you to iterate based on a counter which you get to initialize, validate against a condition to run up to and increment or mutate on every cycle of the iteration. The for-loop is also useful when you have to iterate through an Array. Let's work through an example. Open the main.js file. You'll notice an array containing names of some planets. We'll iterate through this Array, skipping every iteration until we reach index number 3, which we’ll fetch and display on the console as the location of NASA's Perseverance Rover.

Using the 'for-of' and 'for-in' Loops 
The for-of loop allows you to conveniently loop through an inerrable such as an Array without setting up an initializer and managing the incrementing logic manually. Likewise, the for-in loop allows us to iterate through the property of an Object. Let's work through an example to understand how these loops work. Open the main.js file. You'll notice an array of products with name, quantity and cost. We want to loop through this array, as we display every property from the individual product objects as well as use the total Cost() method to compute and display the total cost per item.

Using 'while' and 'do-while' Loops 
The while and do-while loops are two of the most fundamental loop constructs in JavaScript. In the case of the while loop, the condition is validated first before the loop runs, even for the first time. On the other hand, in the case of the do-while loop, the loop block executes at least once before the condition is validated. So, let’s use both for generating a set of even and odd numbers.

Using Recursive Functions in JavaScript 
Recursive functions are functions that call themselves iteratively, giving you full control over the iteration process. Recursive functions are perfect when you want to build accumulators that operate on a set of values that iteratively depend on the outcome of the previous iteration. One such case is calculating the power of numbers, as we saw in the video. Let’s build that function again in this example. Open the main.js file. You’ll notice the calcPower function which is empty at this time.

