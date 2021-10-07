let txt = "Cats and Dogs love dogs and cats and dogcats and catdugs.";
let prtctm = ":FGD:"; // TEMPORARY PROTECT MARKER  

/*
let dict = [{ from: "cat" , to: 'dog'},
            //{ from: "dog" , to: "cat"}
            { from: "d[ouia]g" , to: "cat"}
            //{ from: "dog" , to: "$&aaaa$&"}
           ];
// SORT ACCORDING TO LENGTH (from) FROM LONG TO SHORT
dict.sort((a,b) => b.from.length - a.from.length)
*/
let dictsrc;
function preload() {
  dictsrc = loadTable('dictionary.csv','csv','header');
}

function setup() {

  // https://p5js.org/reference/#/p5.Table/getArray
  dict = dictsrc.getArray();
  dict.sort((a,b) => b[0].length - a[0].length);

  canvas = createCanvas(w, h);
  background(255, 255, 128);
  textSize(w/30);

  //console.log(txt);
  fill(0,180,0);
  text(txt, 40, 80, w-80, h/3-80);

  for (var i = 0; i < dict.length; i++) {

       //from  = dict[i]["from"];
       //to    = dict[i]["to"];
       from  = dict[i][0];
       to    = dict[i][1];
       //txt   = txt.replace(new RegExp(from,"ig"),to);
    // ADD TMP PROTECT MARKER
    // => REPLACE ONLY IF NO PROTECT MARKER
    // => ALLOW SWAPPING
       txt   = txt.replace(new RegExp("(?<!"+prtctm+")"+from,"ig"),prtctm+to);
  }

  txt = txt.replace(new RegExp(prtctm,"g"),"");

  fill(200);
  text(txt, 40, h/4+20, w-80, h/2-80);

}

// function draw() {}

var w = window.innerWidth;
var h = window.innerHeight;

function windowResized() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  textSize(w/20);
  resizeCanvas(w, h);
}