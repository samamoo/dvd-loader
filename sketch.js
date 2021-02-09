let x;
let y;
let xspeed;
let yspeed;
let dvd;

function preload() {
  dvd = loadImage("dvd-rom-logotype.png")
}

function setup() {
  createCanvas(800, 600);
  x = random(width);
  y = random(height);
  xspeed = 10;
  yspeed = 10;
}

function draw() {
  background(0);
  dvd.resize(150, 0)
  image(dvd, x, y)


  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
  } else if ( x <= 0) {
    xspeed = -xspeed;
    x = 0;
  }
  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
  }
}
