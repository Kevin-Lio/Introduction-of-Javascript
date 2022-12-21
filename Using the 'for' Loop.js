'use strict';

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

for (let x = 0; x < planets.length; x++) {
    if (x !== 3) {
      continue;
    }
    console.log(`Perseverance Rover is on ${planets[x]}`);
  }