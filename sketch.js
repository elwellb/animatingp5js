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
let bgcolor = "orange";
let time;
let direction = "foward";
let direction2 = "foward";

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
  time = millis();
  
  //Set background
  background(bgcolor);

  //Create fading rectangle that becomes opaque with time
  noStroke();
  fill(255, 200, 225, time/50);
  rect(width/2-40, 40, 80, 50);

  stroke(1)
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

  //Change direction variable based on state of ball and speed
  if (state == false) {
    direction = "still";
  } else if (speed < 0) {
    direction = "backwards";
  } else if (speed > 0){
    direction = "forward";
  }
  //Check to see if 2nd circle is outside of canvas
  if(xPos2 >= width - diameter || xPos2 <= 0) {
    
    //Change direction
    speed2 = -speed2;
  }
  xPos2 += speed2;

  if (speed2 > 0) {
    direction2 = "forward";
  } else if (speed2 < 0) {
    direction2 = "backwards";
  }
  //Change background color after 10 seconds
  if(time >= 10000) {
    bgcolor = "orchid";
  }
  
}

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

function keyPressed() {

  //check to see if J or j was pressed
  if (key == "J") {
    print("\nCONGRATS! YOU FOUND THE LOUD SECRET MESSAGE.");
    ballDirection();
  } else if (key == "j") {
    print("\nCongrats! You found the secret message.");
    ballDirection();
  }
  } 

  //function to print direction of ball
  function ballDirection() {

    if (direction == "forward" && direction2 == "forward") {

      print("Both balls were travelling forward when this message was sent.");

    } else if (direction == "forward" && direction2 == "backwards") {

      print("The grayscale ball was travelling forward and the blue ball was travelling backwards when this message was sent.");

    } else if (direction == "backwards" && direction2 == "forward") {

      print("The grayscale ball was travelling backwards and the blue ball was travelling forward when this message was sent.");

    } else if (direction == "backwards" && direction2 == "backwards") {

      print("Both balls were travelling backwards when this message was sent.");

    } else if (direction == "still" && direction2 == "forward") {

      print("The grayscale ball was not moving and the blue ball was travelling forward when this message was sent.");

    } else if (direction == "still" && direction2 == "backwards") {

      print("The grayscale ball was not moving and the blue ball was travelling backwards when this message was sent.");
      
    }

  }