class Boy{
    constructor(x,y){
        var options={
            isStatic:true
        }

        this.image = loadImage("../images/Walking Frame/walking_1.png")
        this.boy = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.boy);
    } 

    display(){ 
     var pos = this.boy.position;
     imageMode(CENTER);
     image(this.image,pos.x,pos.y+70,260,260);
    }
}