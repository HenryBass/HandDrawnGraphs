function preload() {
  img = loadImage('m.jpg');
}

function setup() {
  frame = 20;
  var width = 512 + (frame * 2);
  var height = 512 + (frame * 2);
  dist = 1;

  createCanvas(width, height)
  background(230, 230, 220); 
  
  img.loadPixels();
  
  for(y=0;y<height;y++) {
    for(x=0;x<height;x++) {
      
        stroke(220 + (r(15)), 220 + (r(15)), 210 + (r(15)))
        point(x, y) 
      
      }

    }

  
  for(y=0;y<(height - (2 * frame * dist));y+=dist) {
    for(x=0;x<(height - (2 * frame * dist));x+=dist) {
      
      if(r(1) < 1 - expr(x, y, 16)) {
        
      stroke(50 + (r(5)))
      //let pix = img.get(x + r(15), y + r(15));
      //stroke(pix[0] + r(10), pix[1] + r(10), pix[2] + r(10));
      ellipse(x + o(r(1)) + frame, y + o(r(1)) + frame, o(r(1)), o(r(1))) 
      //line(x + frame, y + frame, x + frame + (20 * noise(x/100)), y + frame + (noise(y/100) * 20))
      }

    }

  }
}

function draw() {
  
}

function r(x){
  return Math.random() * x
}

function o(x){
  return Math.round(x)
}

function expr(x, y, s) {

  return cos(tan(sin((x/s) & 23) + sin((y/s) & 23)))
  //x & y & (x/y + y/x) 
  //(x % 256)*(y % 256) / 2000
  //tan(sin((x)/4**2) / sin((y)/4**3))
  //sin((x)/4**2) / sin((y/2)**2)
  //cos(tan(sin((x/s) & 23) + sin((y/s) & 23)))
}