var x, y, vx, vy;

function setup() {
	createCanvas(500, 400);

  x = 200;
  y = 200;
  vx = 5;
  vy = 5;
}

function draw() {
	background(0);
  
 stroke('white');
 fill('red');
 rect(x,y,40,40);
 strokeWeight(5)
  y = y + vy;


  if(y < 0 || y > 400){
    vy = vy * -1;
  }
}
