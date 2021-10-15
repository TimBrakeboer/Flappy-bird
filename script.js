var birb, pipe, pipe2;
var pipes = [];
var bg, birb_img;

class Birb {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.w = 25;
    this.h = 25;
    this.gravity = 0.2;
  }

  //Cirkel maken
  drawBirb() {
    //Zwaartekracht
    this.vy += this.gravity;

    this.y += this.vy;

    //Niet door de grond
    if (this.y > 340) {
      this.vy = 0;
      this.y = 340;
    }
    //Niet door het dak
    if (this.y < 0) {
      this.vy = 0;
      this.y = 0;
    }
    image(birb_bg, this.x, this.y, this.w, this.h);
  }
}


class Pipe {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = 50;
    this.c = "green";
  }

  drawPipe() {
    fill(this.c)
    rect(this.x, this.y, this.w, this.h);
    this.x = this.x - 5;
  }
  //buis rood bij birb = pipe
  checkCollision() {
    if (birb.x < this.x + this.w && birb.x + birb.w > this.x) {
      if (birb.y < this.y + this.h && birb.y + birb.h > this.y) {
        this.c = "red";
      }
    }
    else {
      this.c = "green";
    }
  }
}

//achtergrond
function preload() {
  bg = loadImage('bg.png');
  birb_bg = loadImage('birb.png');
}

//Grootte van speelveld en positie figuur
function setup() {
  createCanvas(580, 360);

  birb = new Birb(100, 200);

  console.log(pipes);
}


function draw() {
  image(bg, 0, 0, width, height);


  if (frameCount % 60 == 0) {
    //console.log("draw pipe!");

    let randomHeight = random(height - 150)

    pipes.push(new Pipe(800, 0, randomHeight));
    pipes.push(new Pipe(800, randomHeight + 100, 1000));
  }

  birb.drawBirb();

  pipes.forEach((p) => {
    p.drawPipe();
    p.checkCollision();
  });
}

//bestuurbaar maken
function keyPressed() {
  if (keyCode == 32) {
    birb.vy -= 5;
  }
}