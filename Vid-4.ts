// Arrays and Objects

//arrays
let names = ["siddhesh", "angela", "siri"];
names.push("toad");
names[0] = "rohan";

let numbers = [10, 20, 30, 40];
numbers.push(25); // this is fine.
// numbers.push('rohan')// this is not fine
// numbers{1} = 'rohan' // this is not fine

let mixed = ["ken", 4, "chun-li", 8, 9];
mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;

// objects
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};
ninja.age = 40;
ninja.name = 'ryan'
// ninja.age = '20'// this is not fine 
// ninja.skills = 'fight' // this is not fine 