const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
    
}

function setup(){
 createCanvas(100, 500);  
 engine = Engine.create();
 world = engine.world;
   
}

function draw(){
 background("black");   
}   

