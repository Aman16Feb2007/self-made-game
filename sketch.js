var canvas;
var gameState = 0;
var cat, rat, cheese; 

function preload(){
    cheeseImg = loadImage("images/cheese.png");
    catAni = loadAnimation("1.png", "2.png", "3.png", "4.png", "5.png");

}

function setup(){
    canvas = createCanvas(1000, 600);

    cat = createSprite(650, 300, 50, 50);
    cat.addAnimation("running", catAni);


    cheese = createSprite(500, 300, 50, 50);
    cheese.addImage(cheeseImg);
    cheese.scale = 0.1;

}


function draw(){
    background(rgb(255, 255, 255));

    drawSprites();
}