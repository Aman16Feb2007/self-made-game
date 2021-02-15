var canvas;
var gameState = 0;
var c1, c2, c3, c4;
var rat, cheese; 
var gameState = "home";
var play, story, control;

function preload(){
    cheeseImg = loadImage("images/cheese.png");
    catAni = loadAnimation("images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png");
    backImg = loadImage("images/background.jpg");
    back1Img = loadImage("images/background1.jpg")
    playImg = loadImage("images/play.png");
    storyImg = loadImage("images/story.png");
    controlImg = loadImage("images/controls.png");
    backBuImg = loadImage("images/backButton.png");
    //catSd = loadSound("Sound.mp3");
}

function setup(){
    canvas = createCanvas(windowWidth-10, windowHeight-10);

    cheeseG = createGroup();
    //rat = createSprite(width/2, height/2, 50, 50);

    play = createSprite(width/2, height-100);
    play.addImage(playImg);
    play.scale = 0.9;

    story = createSprite(width-500, 315+height/2);
    story.addImage(storyImg);
    story.scale = 0.8;

    control = createSprite(width-1310, 315+height/2);
    control.addImage(controlImg);
    control.scale = 0.8;

    backBu = createSprite(-650+width/2, -350+height/2, 50, 50);
    backBu.addImage(backBuImg);
    backBu.scale = 0.2;

    /*c1 = createSprite(650, 300, 50, 50);
    c1.addAnimation("running", catAni);
    c1.scale = 0.5;

    c2 = createSprite(750, 300, 50, 50);
    c2.addAnimation("running", catAni);
    c2.scale = 0.5;

    c3 = createSprite(850, 300, 50, 50);
    c3.addAnimation("running", catAni);
    c3.scale = 0.5;

    c4 = createSprite(950, 300, 50, 50);
    c4.addAnimation("running", catAni);
    c4.scale = 0.5;*/








    //T1 = createSprite(random(0, 1000), random(0, 600), 50, 50);
    
    for(var i = 0; i<2; i++){
        for(var j = 0; j<2; j++){
            cheese = createSprite(80+(width-170)*i, 60+(height-130)*j, 50, 50);
            cheese.addImage(cheeseImg);
            cheeseG.add(cheese);
            cheese.scale = 0.4;
        }}
        cheeseG.setVisibleEach(false);
    }



    /*for(var i = 0; i<10; i++){
        cheese = createSprite(500, 100+40*i, 50, 50);
        cheese.addImage(cheeseImg);
        cheese.scale = 0.12;
    }

    for(var i = 0; i<5; i++){
        for(var j = 0; j<2; j++){
            cheese = createSprite(500+50*i, 100+400*j, 50, 50);
            cheese.addImage(cheeseImg);
            cheese.scale = 0.12;
        }
    }*/






function draw(){
    if(gameState === "home"){
    background(backImg);
        if(mousePressedOver(play)){
            gameState = "level1"
    }
    if(mousePressedOver(story)){
        back1 = createSprite(width/2, height/2);
        back1.addImage(back1Img);
        back1.scale = 4.5;
    }
    if(mousePressedOver(story)){}

    }


    if(gameState === "level1"){
        play.visible = false
        cheeseG.setVisibleEach(true);
        //if(mousePressedOver(backBu)){
            gameState = "home";
        //}
    

    }
    



    for(var i = 0; i<10; i++){
    }
    
    drawSprites();
}

function storyPressed(){

}