let person = ['Andrew', 25];
let personTwo = ['Jen', 29];

let names = ['Mike', 'Ben'];
let myName = ['Nik', ...names];


function display(name, age) {
  console.log(`Hi ${name}, you are ${age}`);
};

display(...person);
display(...personTwo);

myName.forEach(function(name) {
  console.log(`Hi ${name}`);
});
