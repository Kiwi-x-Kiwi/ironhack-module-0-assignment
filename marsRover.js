// Bonus functionalities, obstacles and second rover not included

// Rover Object Goes Here
// ======================
const rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [{ x: 0, y: 0 }]
};

// ======================

function turnLeft(rover) {
  console.log("turnLeft was called!");

  switch (rover.direction) {
    case "N": rover.direction = "W";
      break;
    case "W": rover.direction = "S";
      break;
    case "S": rover.direction = "E";
      break;
    case "E": rover.direction = "N";
      break;
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N": rover.direction = "E";
      break;
    case "E": rover.direction = "S";
      break;
    case "S": rover.direction = "W";
      break;
    case "W": rover.direction = "N";
      break;
  }
}

function moveForward(rover) {
  console.log("moveForward was called")

  switch (rover.direction) {
    case "N":
      rover.y--;
      break;
    case "E":
      rover.x++;
      break;
    case "S":
      rover.y++;
      break;
    case "W":
      rover.x--;
      break;
  }

  console.log(`The rover is currently at position (${rover.x}:${rover.y})`);
  rover.travelLog.push({ x: rover.x, y: rover.y });
}

function moveBackward(rover) {
  console.log("moveBackward was called")

  switch (rover.direction) {
    case "N": rover.y++;
      break;
    case "E": rover.x--;
      break;
    case "S": rover.y--;
      break;
    case "W": rover.x++;
      break;
  }

  console.log(`The rover is currently at position (${rover.x}:${rover.y})`);
  rover.travelLog.push({ x: rover.x, y: rover.y });
}

function canMove(rover, direction = "forward") {

  if (direction === "forward") {
    switch (rover.direction) {
      case "N":
        if (rover.y == 0) {
          console.log(`The rover is at the boundary and cannot move.`);
          return false;
        }
        break;
      case "E":
        if (rover.x == 10) {
          console.log(`The rover is at the boundary and cannot move.`);
          return false;
        }
        break;
      case "S":
        if (rover.y == 10) {
          console.log(`The rover is at the boundary and cannot move.`);
          return false;
        }
        break;
      case "W":
        if (rover.x == 0) {
          console.log(`The rover is at the boundary and cannot move.`);
          return false;
        }
        break;
    }
  }

  else if (direction === "backward") {
    switch (rover.direction) {
      case "N":
        if (rover.y == 10) {
          console.log(`The rover is at the boundary and cannot move.`);
          return false;
        }
        break;
      case "E":
        if (rover.x == 0) {
          console.log(`The rover is at the boundary and cannot move.`);
          return false;
        }
        break;
      case "S":
        if (rover.y == 0) {
          console.log(`The rover is at the boundary and cannot move.`);
          return false;
        }
        break;
      case "W":
        if (rover.x == 10) {
          console.log(`The rover is at the boundary and cannot move.`);
          return false;
        }
        break;
    }
  }

  return true;
}

function printPath(pathArray) {
  let message = ""
  console.log("The path the rover travelled is as follows:")
  for (let i = 0; i < pathArray.length; i++) {
    if (i == 0) {
      message = `[ {x: ${pathArray[i].x}, y: ${pathArray[i].y}}`;
    }
    else if (i == pathArray.length - 1) {
      message = `  {x: ${pathArray[i].x}, y: ${pathArray[i].y}} ]`;
    }
    else {
      message = `  {x: ${pathArray[i].x}, y: ${pathArray[i].y}},`;
    }
    console.log(message);
  }
}

const command = (string, rover) => {
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "l":
      case "L":
        turnLeft(rover);
        break;
      case "r":
      case "R":
        turnRight(rover);
        break;
      case "f":
      case "F":
        if (canMove(rover)) {
          moveForward(rover);
        }
        break;
      case "b":
      case "B":
        if (canMove(rover, "backward")) {
          moveBackward(rover);
        }
        break;
      default:
        console.log("Invalid input.  No action taken.")
        break;
    }
  }

  printPath(rover.travelLog);
}

command("frrbrrbrbfflf", rover);