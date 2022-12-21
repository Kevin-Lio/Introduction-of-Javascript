'use strict';

let item = 'Lettuce';
let type;
// Insert your code here, before the console.log() statement
switch (item) {
    case 'Apple':
    case 'Banana':
    case 'Kiwi':
    case 'Strawberry':
      type = 'fruit';
      break;
    case 'Lettuce':
    case 'Potato':
    case 'Celery':
    case 'Eggplant':
      type = 'vegetable';
      break;
    default: {
      throw new Error('Unable to identify item...');
    }
  }
console.log(`${item} is a ${type}`);
