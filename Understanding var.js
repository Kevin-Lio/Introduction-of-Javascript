'use strict';

var lengthOfRectangle = 10;
var breadthOfRectangle = 0;

function computeArea() {
    var breadthOfRectangle = 20;
    function area() {
      return lengthOfRectangle * breadthOfRectangle;
    }
   
    console.log(`Area of Rectangle: ${area()}`);
  }
   
  computeArea();

console.log(`Length of Rectangle: ${lengthOfRectangle}`);
console.log(`Breadth of Rectangle: ${breadthOfRectangle}`);
