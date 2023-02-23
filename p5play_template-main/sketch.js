 var game,player,form,bg,pc,db,gameState,track,c1i,c2i,c1,c2,cars,allPlayers,o1,o2,gc,fuel,fgrp,cgrp,ogrp
 function preload(){
  bg=loadImage("background.png")
  track=loadImage("track.jpg")
  c1i=loadImage("car1.png")
  c2i=loadImage("car2.png")
  o1=loadImage("obstacle1.png")
  o2=loadImage("obstacle2.png")
  gc=loadImage("powerCoin.png")
  fuel=loadImage("fuel.png")


 }
function setup() {
  ogrp=new Group()
  fgrp=new Group()
  cgrp=new Group()
  createCanvas(windowWidth,windowHeight );
  db=firebase.database()
  game=new Game()
  game.getstate()
  game.start()
 
 // console.log(fgrp,cgrp)

}

function draw() 
{
  //console.log(gameState)
  background(bg);
  if(pc==2){
    game.setState(1)
  }
  if(gameState==1){
   // console.log("play")
   game.play()
  }

}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}




