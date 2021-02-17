var canvas;
var gameState = 0;
var c1, c2, c3, c4;
var rat, cheese; 
var gameState = "level1";
var play, story, control;
var W1, W2, W3, W4, W5, W6, W7, W8, W9, W10;

function preload(){
    cheeseImg = loadImage("images/cheese.png");
    ratImg = loadImage("images/rat.png");
    mazeImg = loadImage("images/maze.jpg");
    catAni = loadAnimation("images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png");
    backImg = loadImage("images/background.jpg");
    back1Img = loadImage("images/background1.jpg")
    playImg = loadImage("images/play.png");
    storyImg = loadImage("images/story.png");
    controlImg = loadImage("images/controls.png");
    backBuImg = loadImage("images/backButton.png");
    homeImg = loadImage("images/homeButton.png");
    //catSd = loadSound("Sound.mp3");
}

function setup(){
    canvas = createCanvas(windowWidth-10, windowHeight-10);

    cheeseG = createGroup();

    rat = createSprite(width/2, height/2, 50, 50);
    rat.addImage(ratImg);
    rat.scale = 0.5;

    playButton = createSprite(width/2, height-100);
    playButton.addImage(playImg);
    playButton.scale = 0.9;

    storyButton = createSprite(width/2-450, 280+height/2);
    storyButton.addImage(storyImg);
    storyButton.scale = 0.8;

    controlButton = createSprite(width/2+500, 280+height/2);
    controlButton.addImage(controlImg);
    controlButton.scale = 0.8;

    backButton = createSprite(-650+width/2, -350+height/2, 50, 50);
    backButton.addImage(backBuImg);
    backButton.scale = 0.2;
    backButton.visible=false;

    homeButton = createSprite(width/2-50, 100, 50, 50);
    homeButton.addImage(homeImg);
    homeButton.scale = 0.3;
        
    back1 = createSprite(width/2, 15+height/2);
    back1.addImage(mazeImg);
    back1.scale = 2;

    W1 = createSprite(65+width/2, -315+height/2, 1210, 32);
    W2 = createSprite(-65+width/2, 344+height/2, 1210, 32);
    W3 = createSprite(658+width/2, 15+height/2, 32, 680);
    W4 = createSprite(-656+width/2, 15+height/2, 32, 680);
    W5 = createSprite(-262+width/2, -180+height/2, 32, 250);
    W6 = createSprite(width/2, -117+height/2, 32, 162);
    W7 = createSprite(-130+width/2, 277+height/2, 32, 162);
    W8 = createSprite(-130+width/2, 15+height/2, 32, 162);
    W9 = createSprite(-80+width/2, -182+height/2, 132, 32);
    W10 = createSprite(80+width/2, -52+height/2, 132, 32);




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
    c4.scale = 0.5;

    T1 = createSprite(random(0, 1000), random(0, 600), 50, 50);
*/    
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

        playButton.visible=true;
        storyButton.visible=true;
        controlButton.visible=true;
        homeButton.visible=false;
        rat.visible = false;
        cheeseG.setVisibleEach(false);

        

        if(mousePressedOver(playButton))
            gameState = "level1"
        
        if(mousePressedOver(storyButton))
            gameState = "homeStory"
        
        if(mousePressedOver(controlButton))
            gameState = "homeControls" 
    }

    
    
    if(gameState === "homeStory" || gameState === "homeControls"){
        background(backImg);

        storyButton.visible=false;
        playButton.visible=false;
        controlButton.visible=false;
        homeButton.visible=true;
        rat.visible = false;

        if(mousePressedOver(homeButton))
            gameState="home";

        if(gameState === "homeStory"){
            textSize(70);
            fill("blue");
            text("Jerry is really hungry and is in search of food", -770+width/2, -50+height/2);
            text("He eats almost everything but loves cheese ", -770+width/2, 50+height/2);
            text("Please help Jerry to find some food", -770+width/2, 150+height/2 );
            text("Cross the hurdles and beware of cats", -770+width/2, 250+height/2);
        }

        if(gameState === "homeControls"){
            fill("blue");
            textSize(70)
            text("Press Right Arrow key to go right", -500+width/2, -50+height/2);
            text("Press Left Arrow key to go left", -500+width/2, 50+height/2);
            text("Press Up Arrow key to go Up", -500+width/2, 150+height/2);
            text("Press Down Arrow key to go Down", -500+width/2, 250+height/2);
        }
    }

    if(gameState === "level1"){
        background(rgb(254, 230, 102));

        playButton.visible = false;
        storyButton.visible=false;
        controlButton.visible=false;
        homeButton.visible=true;
        rat.visible = true;
        cheeseG.setVisibleEach(true);
        homeButton.scale = 0.1;
        homeButton.y = 30;

        if(mousePressedOver(homeButton)){
            gameState = "home";
        }
    }
    

    drawSprites();
    //textSize(50);   
    //text(gameState,50,50);
}
