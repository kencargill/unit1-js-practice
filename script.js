document.write("JavaScript works!");
console.log("Hello console!");
console.warn("This is only a test!");
 
let myName = "ken";
let workFromHome = false;
let side = 15;
let radius = 10;
 
console.log("My name is " + myName);
console.log(`I work from home: ${workFromHome}`);
console.log("The length of each side of the square is " + side);
console.log("The radius of the circle is " + radius);
 
let squareArea = side * side;
let squarePerimeter = 4 * side;
let circleArea = Math.PI * radius * radius;
let circlePerimeter = 2 * Math.PI * radius;

console.log(squareArea);
console.log(squarePerimeter);
console.log(circleArea);
console.log(circlePerimeter);

let travelOptions = ["foot", "bike", "car", "airplane"];
console.log(`1) ${travelOptions[0]} `);
console.log(`2) ${travelOptions[1]} `);
console.log(`3) ${travelOptions[2]} `);
console.log(`4) ${travelOptions[3]} `);