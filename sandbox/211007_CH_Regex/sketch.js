var w = window.innerWidth;
var h = window.innerHeight;

let s = 'Zwei Kamele aus dem Hinterhaus saßen auf der Straße und erzählten sich was. Da kam die Polizei, fragt‚ Was ist denn das? Zwei Kamele aus dem Hinterhaus.';

function setup() {
  canvas = createCanvas(w, h);
  textSize(w/12);

  s = s.replace(/[aeiouäöü]+/g,'i');
  // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  //s = s.replace(/[aeiouäöü]+/g,'$&');
  // https://de.wikipedia.org/wiki/Spielsprache

}

function draw() {
  background(220);

  // https://p5js.org/reference/#/p5/text
  text(s, 40, 40, w-80, h-80);

}

function windowResized() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;

  textSize(w/12);
  resizeCanvas(w, h);
}