const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var thunder1_img,thunder2_img,thunder3_img,thunder4_img;
var thunder;
var thunderCreateFrame = 0;
var maxdrops = 100;
var engine, world;
var rand;
var drops =  [];

function preload(){
 thunder1_img = loadImage("../images/thunderbolt/1.png")
 thunder2_img = loadImage("../images/thunderbolt/2.png")
 thunder3_img = loadImage("../images/thunderbolt/3.png")
 thunder4_img = loadImage("../images/thunderbolt/4.png")
}

function setup(){
  createCanvas(400,700)
    engine = Engine.create();
    world = engine.world;

    boy = new Boy(200,500);


    if(frameCount % 150 === 0){
      for(var i=0;i<maxdrops;i++){
        drops.push(new Drop(random(0,1300),random(0,600)))
     }     
    }
}

function draw(){
 Engine.update(engine); 
 background(0);

  rand = Math.round(random(1,4));
 if (frameCount % 80 === 0) {
   thunderCreateFrame = frameCount;
   thunder = createSprite(random(10, 370), random(0,30), 10, 10);
   thunder.velocityY = 6;
   switch(rand){
       case 1: thunder.addImage("thunder",thunder1_img);
       break;
       case 2: thunder.addImage("thunder", thunder2_img);
       break;
       case 3: thunder.addImage("thunder", thunder3_img);
       break;
       case 4: thunder.addImage("thunder", thunder4_img);
       break;
   }
  thunder.scale = random(0.3,0.6);
}
if(thunderCreateFrame+10===frameCount && thunder){
  thunder.destroy();
}
boy.display();
for(var i=0;i<maxdrops;i++){
  drops[i].showdrop();
  drops[i].updateY();
}
drawSprites();
}   

