//Initialize Variables
let speed = 4;
let diameter = 40;
let xPos;
let yPos;
let state = true;
let xPos2;
let yPos2;
let speed2 = 4;
let color = 0;

function setup() {
  //Create Canvas
  createCanvas(400, 400);

  //Set initial xPos
  xPos = width/2;
  xPos2 = diameter/2;
  //Set initial yPos
  yPos = height/2;
  yPos2 = 0;
}

function draw() {
  //Set background
  background("orange");

  //Create Circle
  fill(color);
  ellipse(xPos, yPos, diameter);

  //Create second circle
  fill("blue");
  ellipse(xPos2 + diameter/2, yPos2 + height/2, diameter);

  //Only run if mouse has not been clicked
  if(state == true) {
  //Check to see if circle is outside of canvas
    if(xPos >= width-diameter/2 || xPos <= 0 + diameter/2) {
      
      //Change direction
      speed = -speed;
    }
    //Move X position
    xPos += speed;
  }
  //Check to see if 2nd circle is outside of canvas
  if(xPos2 >= width - diameter || xPos2 <= 0) {
    
    //Change direction
    speed2 = -speed2;
  }
  xPos2 += speed2;
}

// //Stop loop if mouse is pressed
// function mousePressed() {

//   noLoop();
  
// }

// //Start loop again when mouse is released
// function mouseReleased() {

//   loop();

// }

//Check to see if the mouse is clicked
function mouseClicked() {

  //If mouse is clicked, stop loop
  if(state == true) {
    state = false;

    //otherwise, begin loop
  } else {
    state = true;
    //set random color only when starting loop again
    color = random(255);
  }
}
