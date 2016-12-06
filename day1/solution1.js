/*jslint es6 node:true */
const fs = require('fs');

/* Get the instructions from text file */
const instructions = fs.readFileSync('day1/dir.txt').toString().split(",");

// starting point
let x = 0, y = 0;

// to decide if it has to go +1 or -1 on the x or y axis
let curOrientation = "N";

let move = function (direction, steps) {
    "use strict";
    /* change orientation so we know which way to go on the x or y axis */
    changeOrientation(direction);

    if(curOrientation === "N") { y += steps; }

    if(curOrientation === "E") { x += steps; }

    if(curOrientation === "S") { y -= steps; }

    if(curOrientation === "W") { x -= steps; }
    console.log(`I am now at position ${x}, ${y}`);
};

let getOrientation = function (orientation) {
    "use strict"
};

let changeOrientation = function (direction) {
    switch(curOrientation) {
        case "N":
            direction === "R" ? curOrientation = "E" : curOrientation = "W";
            break;
        case "E":
            direction === "R" ? curOrientation = "S" : curOrientation = "N";
            break;
        case "S":
            direction === "R" ? curOrientation = "W" : curOrientation = "E";
            break;
        case "W":
            direction === "R" ? curOrientation = "N" : curOrientation = "S";
            break;
    }
};

instructions.forEach(function (instruction) {
    "use strict";
    let direction = instruction[0],
        steps = parseInt(instruction.substring(1, instruction.length));

    move(direction, steps);
});

console.log(`Finished: the answer should be ${x + y}`);