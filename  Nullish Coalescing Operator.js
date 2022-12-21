'use strict';

let tempData = {
  location: 'Lake Eastwood',
  sensor1: 0,
  sensor2: null,
  sensor3: 1.8,
};

console.log(
    `${tempData.location}: ${
      tempData.sensor1 ?? tempData.sensor2 ?? tempData.sensor3
    } degrees`
  );
