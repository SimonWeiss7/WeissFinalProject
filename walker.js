//defining the random walker object
class Walker {
  
  //the constructor code runs as soon as the walker is created
  //this is like a 'setup()' for our random walker
  constructor(x, y) {
    //set our walker's 'member variables' to the input values
    //the 'this' keyword refers to the walker itself
    this.x = x;
    this.y = y;
    
    this.age = 10;
    
    let randomIndex = floor(random(palette.length));
    this.color = palette[randomIndex];
  }
  
  //our walker's update() function will move the walker
  update() {
    let rX = random(-maxDistance, maxDistance);
    let rY = random(-maxDistance, maxDistance);
    
    this.x += rX;
    this.y += rY;
    
    this.age++;
    
    //call our walker's internal 'keepOnScreen()' function
    this.keepOnScreen();
  }
  
  //our walker's display() function will draw the walker
  display() {
    let size = map(this.age, 10, walkerLifespan, walkerSize/2, 0);
    
    fill(this.color);
    square(this.x, this.y, size);
  }
  
  //our walker's keepOnScreen() function will loop its position
  //whenever it falls offscreen
  keepOnScreen() {
    if (this.x < 0) {
      this.x = width;
    }
    
    if (this.x > width) {
      this.x = 0;
    }
    
    if (this.y < 0) {
      this.y = height;
    }
    
    if (this.y > height) {
      this.y = 0;
    }
  }
}