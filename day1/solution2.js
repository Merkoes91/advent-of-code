let fs = require('fs'),
    moves = fs.readFileSync('day1/dir.txt').toString().split(",");

let x = 0, y = 0, direction = 0, position = [x, y], spots = [], twice, foundTwice = false;
moves.forEach(function (instruction) {
    "use strict";
    direction = (direction + (instruction[0] === 'R' ? 1 : -1) + 4) % 4; //if instruc. is R go 1, else go -1; +4 %4 to keep direc. in range
    var n = parseInt(instruction.slice(1)); //number of steps to move
    switch (direction) {
        //goes through each direction: if haven't found twice var, goes through each move adding or subtracting to x or y depending on direction; if not in spots, adds to spots, otherwise you've found twice and set it - same for all 4 cases
        case 0: //N
            if (foundTwice === false) { 
                for (var i = 0; i < n; i++) {
                    position = [x, y + i];
                    if (spots.indexOf(position.toString()) === -1) {
                        spots.push(position.toString());
                    } else {
                        foundTwice = true;
                        twice = position;
                    }
                }
            }
            y += n;
            break;
        case 1: //E
            if (foundTwice === false) {
                for (var i = 0; i < n; i++) {
                    position = [x + i, y];
                    if (spots.indexOf(position.toString()) === -1) {
                        spots.push(position.toString());
                    } else {
                        foundTwice = true;
                        twice = position;
                    }
                }
            }
            x += n;
            break;
        case 2: //S
            if (foundTwice === false) {
                for (var i = 0; i < n; i++) {
                    position = [x, y - i];
                    if (spots.indexOf(position.toString()) === -1) {
                        spots.push(position.toString());
                    } else {
                        foundTwice = true;
                        twice = position;
                    }
                }
            }
            y -= n;
            break;
        case 3: //W
            if (foundTwice === false) {
                for (var i = 0; i < n; i++) {
                    position = [x - i, y];
                    if (spots.indexOf(position.toString()) === -1) {
                        spots.push(position.toString());
                    } else {
                        foundTwice = true;
                        twice = position;
                    }
                }
            }
            x -= n;
            break;
    }
})

//shows x+y for number of blocks away from start, plus twice visited location
console.log(Math.abs(x) + Math.abs(y));
console.log(twice);
console.log(Math.abs(twice[0] + Math.abs(twice[1])));