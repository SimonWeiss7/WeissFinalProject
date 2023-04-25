//an array of hex colors
var palette = ['#33F0FF',
               '#5E33FF',
               '#C133FF',
               '#FF3396',
               '#33FFB8',
               '#90FF33',
               '#3377FF',
               '#CEFF33',
               '#FFC133',
               '#7D33FF'];

//a variable to store our random walker array!
var randomWalkers = [];

//global variables for our random walker
var maxDistance = 15;
var walkerSize = 25;
var walkerLifespan = 50;

function setup() {
  //use the current window size as the canvas size
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}
function windowResized() {
  resizeCanvas(windowWidth,Windowheight);
}

function draw() {
  //push a new walker into the array when the mouse is held down
  if (mouseIsPressed) {
    //create a new walker and pass in the mouse position
    let newWalker = new Walker(mouseX, mouseY);
    //add the new walker to the array
    randomWalkers.push(newWalker);
  }
  
  //loop over all our walkers and call their functions
  for (let i = 0; i < randomWalkers.length; i++) {
    randomWalkers[i].update();
    randomWalkers[i].display();
    
    //if a walker's age is over the global lifespan,
    //then remove it from the array
    if (randomWalkers[i].age > walkerLifespan) {
      randomWalkers.splice(i, 1);
    }
  }
}