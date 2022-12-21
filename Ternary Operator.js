'use strict';

const today = 'Thursday';
const typeOfDay =
  today === 'Saturday' || today === 'Sunday' ? 
  'Weekend': today === 'Wednesday' ? 
  'Hump Day': 'Weekday';

console.log(`${today} - ${typeOfDay}`);
