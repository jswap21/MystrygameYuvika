var gameState=1;
var door;
var livingroom;
var hauntedroom;
var hollywoodset;
var crimescene;
var tickmark;
var key;
var border;

function preload(){
  door= loadImage('Images/door_temp.jfif');
livingroom= loadImage('Images/livingroomfinal.png');
hauntedroom=loadImage('Images/haunted room game.jpg');
hollywoodset=loadImage('Images/hollywood set game.jpg');
crimescene=loadImage('Images/crime.png');
tickmark=loadImage('Images/tick mark.jpg');
key=loadImage('Images/key game.jfif');
border=loadImage('Images/border.png');
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
      border1=createSprite(402,650,200,50);
      border1.addImage("border",border)
      border1.visible=false;
  

}

function draw() {
  background(225); 
  if(gameState===0){
 background(door);
 textSize(165);
 fill(0,0,0)
 textFont('chiller');
 text("MYSTERY GAME",displayWidth/2-390,displayHeight/2-10);
 textSize(20);
 textFont('inconsolata');
 text("press ENTER to start",displayWidth/2-50,displayHeight-20);
 textSize(35)
 fill('white')
 text("DEVELOPED BY: YUVIKA SACHDEVA", displayWidth/2-280,displayHeight-290)
  
  if (keyDown("enter")){
     gameState=1
    }
  }

  if(gameState===1){
    background(livingroom);   
    border1.visible=true;
    text(""+mouseX+","+mouseY,mouseX,mouseY);

    icecream=createSprite(725,464,40,90);
    if(mousePressedOver(icecream)){
   
     border1.addImage("border",tickmark)
    
      
     if(mousePressedOver(icecream)){
      border1.addImage("border",tickmark)
      text("YOU FOUND IT!!",displayWidth/2-50,displayHeight-20)

     }
     
    
     
     
    }
    

    
    
    
    
  } 
  
  if(gameState===2){
    background(hauntedroom);
  } 

  if(gameState===3){
    background(hollywoodset);
    
  } 
  if(gameState===4){
    background(crimescene);
  } 

  if(gameState===5){
    
  } 


  




drawSprites();
}
