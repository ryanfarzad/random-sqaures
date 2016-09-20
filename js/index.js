var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var x = 1;
var y = 1;


var setProto = function() {
  this.vx = 1;
  this.vy = 1;
  this.pause = false;
    this.Pause = function() {
      if (this.pause){
        this.pause = false;
        requestAnimationFrame(draw);
      } else{
        this.pause = true;       
      }
    }
};
var set = new setProto();

  var gui = new dat.GUI();
gui.add(set, 'Pause');
gui.add(set, 'vx', 1, 10);
gui.add(set, 'vy', 1, 10);



function draw() {
 
  ctx.fillStyle="#"+((1<<24)*Math.random()|0).toString(16);
 ctx.fillRect(x,y,Math.floor((Math.random() * 20) + 1), Math.floor((Math.random() * 20) + 1));
  
 if(x>=1400 || x<=0) {
   set.vx=-set.vx;
  }
  if(y>=700 || y<=0) {
    set.vy=-set.vy;
  }
   x+=set.vx
  y+=set.vy
  if(!set.pause) {
  requestAnimationFrame(draw)
  }
}
requestAnimationFrame(draw)