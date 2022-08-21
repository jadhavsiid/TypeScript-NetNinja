// Type Basics
let character = "mario";
let age = 30;
let isBlackBelt = false;

// character = 20;
character = "siddhesh";

// age = 'yoshi';
age = 20;

// isBlackBelt ='yes';
isBlackBelt = true;

// Note: In Ts type of an entity cannot be changed after declaring once. But value assigned to that entity can be changed.

const circ = (diameter: number) => {
  return diameter * Math.PI;
};
console.log(circ(8.2));
