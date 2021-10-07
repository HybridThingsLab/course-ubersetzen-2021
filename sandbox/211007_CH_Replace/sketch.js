// https://stackoverflow.com/q/11199565

var txt_src = "I want value 8 here and value 282 here";
var txt_neu = txt_src;

let dict = [{ from: "2"  , to: "zwei"},
            { from: "8"  , to: "acht"},
            { from: "282", to: "zweihundertzweiundachtzig" }
           ];
// SORT ACCORDING TO LENGTH (from)
// https://www.youtube.com/watch?v=MWD-iKzR2c8
dict.sort((a,b) => b.from.length - a.from.length)

function setup() {

  canvas = createCanvas(w, h);
  textSize(w/20);

  for (var i = 0; i < dict.length; i++) {

      from = dict[i]["from"];
      to = dict[i]["to"];
      //console.log(from);
      txt_neu = txt_neu.replace(new RegExp(from,"g"),to);
  }

//console.log(txt);

}

function draw() {
  background(220);

  fill(255)
  text(txt_src, 40, 80, w-80, h/2-80);

  fill(255,0,0)
  text(txt_neu, 40, h/2, w-80, h-160);

}

var w = window.innerWidth;
var h = window.innerHeight;

function windowResized() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  textSize(w/20);
  resizeCanvas(w, h);
}