var planet1;
var planet2;
var planet3;
var planet4;
var planet5;
var planet6;
var planet7;
var planet8;
var sun;

function setup() {
  createCanvas(1200,1200);
  sun=createSprite(700, 300, 100, 100);
  planet1=createSprite(610,300,20,20); 
  planet2=createSprite(550,300,25,25);
  planet3=createSprite(490,300,30,30);                        
 planet4=createSprite(430,300,27,27);
 planet5=createSprite(350,300,31,31); 
 planet6=createSprite(290,300,30,30);
 planet7=createSprite(230,300,26,26);                        
planet8=createSprite(170,300,27,27);

}

function draw() {
  background(255,255,255);
sun.display();
  planet1.display();
planet2.display();
planet3.display();
planet4.display();
planet5.display();
planet6.display();
planet7.display();
planet8.display();
planet1.x=mouseX;

if(planet1.istouching(sun)){

  sun.destroy(planet1);
  
  }
  drawSprites();
}