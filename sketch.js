let webcam;
let ballSystem = [];
let scale = 20;

class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x += random(-8, 8);
    this.y += random(-8, 8);
  }

  show() {
  let pX = (this.x / scale);  
  let pY = (this.y / scale);
    
  if (webcam.width > 0) {
  let pixelColor = webcam.get(pX, pY);  
      
   fill(pixelColor[0], pixelColor[1], pixelColor[2], 200);
  noStroke();
  square(this.x, this.y, this.r);  
    }
  }

  checkEdges() {
    if (this.x < 15) {
    this.x = 15;
  } else if (this.x > width - 15) {
      this.x = width - 15;
    }
  if (this.y < 15) {
    this.y = 15;
  } else if (this.y > height - 15) {
    this.y = height - 15;
    }
  }
}

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(width / scale, height / scale);
  webcam.hide(); 
  for (let i = 0; i < 45; i++) {
    let rx = random(15, width - 15);
    let ry = random(15, height - 15);
    let rr = random(10, 50);
    ballSystem.push(new Ball(rx, ry, rr));
  }
}

function draw() {
  background(0);
  if (webcam.width > 0) { 
    image(webcam, 0, 0, width, height); 
    filter(POSTERIZE, 3);
  }

  for (let ball of ballSystem) {
    ball.move();
    ball.show();
    ball.checkEdges();
  }
}
