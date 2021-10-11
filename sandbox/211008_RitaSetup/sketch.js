var w = window.innerWidth;
var h = window.innerHeight;

let words;

function setup() {

  canvas = createCanvas(w, h);
  fill(255);
  noStroke();
  words = RiTa.tokenize("The elephant took a bite!");
}

function draw() {

  background(50);
  textSize(w/20);

 for (let i=0; i < words.length; i++) {
      text(words[i], w/4, h/4 + i*(h+w)/2/15);
  }
}

function windowResized() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  resizeCanvas(w, h);
}