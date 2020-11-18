class Umbrella{
    constructor(){
     this.x = x;
     this.y = y;
     this.r = 4;
     this.circle = Matter.bodies.circle(this.x, this.y, this.r);
     this.image = loadImage("images/images/Walking Frame/walking_1.png");  
    }
    display(){
        image(this.image, 200, 200);
    }
}