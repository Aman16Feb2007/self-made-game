var canvas;
var gameState = 0;
var c1, c2, c3, c4;
var rat, cheese; 
var gameState = "level1";
var Score = 0;
var play, story, control;
var W1, W2, W3, W4, W5, W6, W7, W8, W9, W10, W11, W12, W13, W14, W15, W16, W17, W18;
var W19, W20, W25, W26, W27, W28, W29, W30, W31, W32, W33, W34, W35, W36;
var cat1, cat2, cat3, cat4;
var fruit1, fruit2, fruit3, fruit4, fruit5, fruit6, fruit7, fruit8, fruit9, fruit10;
var life1, life2, life3;


function preload(){
    cheeseImg = loadImage("images/cheese.png");
    ratImg = loadImage("images/rat.png");
    rat1Img = loadImage("images/rat1.png");
    catImg = loadImage("images/cat.png");
    tomImg = loadImage("images/tom.png");
    lifeImg = loadImage("images/life.png");
    fruit1Img = loadImage("images/fruit1.png");
    fruit2Img = loadImage("images/fruit2.png");
    fruit3Img = loadImage("images/fruit3.png");
    fruit4Img = loadImage("images/fruit4.png");
    fruit5Img = loadImage("images/fruit5.png");
    ratManImg = loadImage("images/ratMan.png");
    warningImg = loadImage("images/warning.png");
    mazeImg = loadImage("images/maze.jpg");
    //catAni = loadAnimation("images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png");
    backImg = loadImage("images/background.jpg");
    back1Img = loadImage("images/background1.jpg")
    playImg = loadImage("images/play.png");
    storyImg = loadImage("images/story.png");
    controlImg = loadImage("images/controls.png");
    homeImg = loadImage("images/homeButton.png");
    //catSd = loadSound("Sound.mp3");
}

function setup(){
    canvas = createCanvas(windowWidth-10, windowHeight-10);

    WG = createGroup();

    playButton = createSprite(width/2, height-100);
    playButton.addImage(playImg);
    playButton.scale = 0.9;

    storyButton = createSprite(-450+width/2, 285+height/2);
    storyButton.addImage(storyImg);
    storyButton.scale = 0.8;

    controlButton = createSprite(450+width/2, 285+height/2);
    controlButton.addImage(controlImg);
    controlButton.scale = 0.8;

    homeButton = createSprite(width/2-50, 100, 50, 50);
    homeButton.addImage(homeImg);
    homeButton.scale = 0.3;

    ratMan = createSprite(width/2, -250+height/2, 50, 50);
    ratMan.addImage(ratManImg);

    back1 = createSprite(width/2, 15+height/2, 50, 50);
    back1.addImage(mazeImg);
    back1.scale = 2;
    
    fruit1 = createSprite(-450+width/2, -100+height/2, 50, 50);
    fruit1.addImage(fruit1Img);
    fruit1.scale = 0.18;

    fruit2 = createSprite(-200+width/2, height/2, 50, 50);
    fruit2.addImage(fruit2Img);
    fruit2.scale = 0.18;

    fruit3 = createSprite(180+width/2, 30+height/2, 50, 50);
    fruit3.addImage(fruit3Img);
    fruit3.scale = 0.18;

    fruit4 = createSprite(330+width/2, -130+height/2, 50, 50);
    fruit4.addImage(fruit4Img);
    fruit4.scale = 0.18;

    fruit5 = createSprite(580+width/2, height/2, 50, 50);
    fruit5.addImage(fruit5Img);
    fruit5.scale = 0.15;

    fruit6 = createSprite(-300+width/2, 170+height/2, 50, 50);
    fruit6.addImage(fruit1Img);
    fruit6.scale = 0.18;

    fruit7 = createSprite(80+width/2, 300+height/2, 50, 50);
    fruit7.addImage(fruit2Img);
    fruit7.scale = 0.18;

    fruit8 = createSprite(220+width/2, 160+height/2, 50, 50);
    fruit8.addImage(fruit3Img);
    fruit8.scale = 0.18;


    rat = createSprite(width/2, height/2, 50, 50);
    rat.addImage(ratImg);
    rat.scale = 0.23;

    cat1 = createSprite(width/2, 140, 50, 50);
    cat1.addImage(catImg);
    cat1.scale = 0.3;

    cat2 = createSprite(-350+width/2, 140, 50, 50);
    cat2.addImage(catImg);
    cat2.scale = 0.3;

    life1 = createSprite(820+width/2, 350+height/2);
    life1.addImage(lifeImg);
    life1.scale = 0.1

    life2 = createSprite(760+width/2, 350+height/2);
    life2.addImage(lifeImg);
    life2.scale = 0.1

    life3 = createSprite(700+width/2, 350+height/2);
    life3.addImage(lifeImg);
    life3.scale = 0.1


    /*cat3 = createSprite(width/2, 140, 50, 50);
    cat3.addImage(catImg);
    cat3.scale = 0.3;

    cat4 = createSprite(width/2, 140, 50, 50);
    cat4.addImage(catImg);
    cat4.scale = 0.3;*/

    W1 = createSprite(65+width/2, -315+height/2, 1210, 32);
    W2 = createSprite(-65+width/2, 344+height/2, 1210, 32);
    W3 = createSprite(658+width/2, 15+height/2, 32, 680);
    W4 = createSprite(-656+width/2, 10+height/2, 32, 680);
    W5 = createSprite(-262+width/2, -180+height/2, 32, 250);
    W6 = createSprite(width/2, -117+height/2, 32, 162);
    W7 = createSprite(-130+width/2, 277+height/2, 32, 162);
    W8 = createSprite(-130+width/2, 15+height/2, 32, 162);
    W9 = createSprite(-80+width/2, -182+height/2, 132, 32);
    W10 = createSprite(80+width/2, -52+height/2, 132, 32);
    W11 = createSprite(132+width/2, 15+height/2, 32, 164);
    W12 = createSprite(277+width/2, 80+height/2, 265, 32);
    W13 = createSprite(394+width/2, -50+height/2, 32, 230);
    W14 = createSprite(394+width/2, -182+height/2, 291, 32);
    W15 = createSprite(262.5+width/2, -100+height/2, 32, 132);
    W16 = createSprite(262.5+width/2, -100+height/2, 32, 132);
    W17 = createSprite(262.5+width/2, -100+height/2, 32, 132);
    W18 = createSprite(262.5+width/2, -100+height/2, 32, 132);
    W19 = createSprite(-332+width/2, -51+height/2, 415, 32);
    W20 = createSprite(-459+width/2, -182+height/2, 160, 32);
    W21 = createSprite(-524+width/2, -120+height/2, 32, 132);
    W22 = createSprite(-394+width/2, 30+height/2, 32, 132);
    W23 = createSprite(-574+width/2, 80+height/2, 132, 32);
    W24 = createSprite(-393+width/2, 211.5+height/2, 292, 32);
    W25 = createSprite(-262+width/2, 143+height/2, 32, 155);
    W26 = createSprite(-262+width/2, 143+height/2, 32, 155);
    W27 = createSprite(-198+width/2, 80+height/2, 160, 32);
    W28 = createSprite(-0.5+width/2, 146+height/2, 32, 160);
    W29 = createSprite(140+width/2, 210+height/2, 275, 32);
    W30 = createSprite(263+width/2, 150+height/2, 32, 132);
    W31 = createSprite(131+width/2, 265+height/2, 32, 132);
    W32 = createSprite(518+width/2, 211+height/2, 280, 32);
    W33 = createSprite(525+width/2, 18+height/2, 32, 155);
    W34 = createSprite(587+width/2, -52+height/2, 155, 32);
    W35 = createSprite(600+width/2, 343+height/2, 132, 32);
    W36 = createSprite(-590+width/2, -315+height/2, 132, 32);

    cheese1 = createSprite(-765+width/2, 320+height/2, 50, 50);
    cheese1.addImage(cheeseImg);
    cheese1.scale = 0.4;

    cheese2 = createSprite(760+width/2, -320+height/2, 50, 50);
    cheese2.addImage(cheeseImg);
    cheese2.scale = 0.4;

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
        life1.visible = false;
        life2.visible = false;
        life3.visible = false;
        rat.visible = false;
        cat1.visible = false;
        cat2.visible = false;
        ratMan.visible = true;
        back1.visible = false;
        fruit1.visible = false;
        fruit2.visible = false;
        fruit3.visible = false;
        fruit4.visible = false;
        fruit5.visible = false;
        fruit6.visible = false;
        fruit7.visible = false;
        fruit8.visible = false;
        W1.visible = false;
        W2.visible = false;
        W3.visible = false;
        W4.visible = false;
        W5.visible = false;
        W6.visible = false;
        W7.visible = false;
        W8.visible = false;
        W9.visible = false;
        W10.visible = false;
        W11.visible = false;
        W12.visible = false;
        W13.visible = false;
        W14.visible = false;
        W15.visible = false;
        W16.visible = false;
        W17.visible = false;
        W18.visible = false;
        W19.visible = false;
        W20.visible = false;
        W21.visible = false;
        W22.visible = false;
        W23.visible = false;
        W24.visible = false;
        W25.visible = false;
        W26.visible = false;
        W27.visible = false;
        W28.visible = false;
        W29.visible = false;
        W30.visible = false;
        W31.visible = false;
        W32.visible = false;
        W33.visible = false;
        W34.visible = false;
        W35.visible = false;
        W36.visible = false;
        cheese1.visible = false; 
        cheese2.visible = false;

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
    life1.visible = false;
    life2.visible = false;
    life3.visible = false;
    rat.visible = false;
    ratMan.visible = false;
    back1.visible = false;
    fruit1.visible = false;
    fruit2.visible = false;
    fruit3.visible = false;
    fruit4.visible = false;
    fruit5.visible = false;
    fruit6.visible = false;
    fruit7.visible = false;
    fruit8.visible = false;
    cat1.visible = false;
    cat2.visible = false;
    homeButton.scale = 0.3;
    homeButton.y = 100;
    W1.visible = false;
    W2.visible = false;
    W3.visible = false;
    W4.visible = false;
    W5.visible = false;
    W6.visible = false;
    W7.visible = false;
    W8.visible = false;
    W9.visible = false;
    W10.visible = false;
    W11.visible = false;
    W12.visible = false;
    W13.visible = false;
    W14.visible = false;
    W15.visible = false;
    W16.visible = false;
    W17.visible = false;
    W18.visible = false;
    W19.visible = false;
    W20.visible = false;
    W21.visible = false;
    W22.visible = false;
    W23.visible = false;
    W24.visible = false;
    W25.visible = false;
    W26.visible = false;
    W27.visible = false;
    W28.visible = false;
    W29.visible = false;
    W30.visible = false;
    W31.visible = false;
    W32.visible = false;
    W33.visible = false;
    W34.visible = false;
    W35.visible = false;
    W36.visible = false;

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
    cat1.visible = true;
    cat2.visible = true;
    life1.visible = true;
    life2.visible = true;
    life3.visible = true;
    rat.visible = true;
    ratMan.visible = false;
    back1.visible = true;
    fruit1.visible = true;
    fruit2.visible = true;
    fruit3.visible = true;
    fruit4.visible = true;
    fruit5.visible = true;
    fruit6.visible = true;
    fruit7.visible = true;
    fruit8.visible = true;
    W1.visible = true;
    W2.visible = true;
    W3.visible = true;
    W4.visible = true;
    W5.visible = true;
    W6.visible = true;
    W7.visible = true;
    W8.visible = true;
    W9.visible = true;
    W10.visible = true;
    W11.visible = true;
    W12.visible = true;
    W13.visible = true;
    W14.visible = true;
    W15.visible = true;
    W16.visible = true;
    W17.visible = true;
    W18.visible = true;
    W19.visible = true;
    W20.visible = true;
    W21.visible = true;
    W22.visible = true;
    W23.visible = true;
    W24.visible = true;
    W25.visible = true;
    W26.visible = true;
    W27.visible = true;
    W28.visible = true;
    W29.visible = true;
    W30.visible = true;
    W31.visible = true;
    W32.visible = true;
    W33.visible = true;
    W34.visible = true;
    W35.visible = true;
    W36.visible = true;
    cheese1.visible = true;
    cheese2.visible = true;
    homeButton.scale = 0.1;
    homeButton.y = 30;
    //rat.x = mouseX;
    //rat.y = mouseY;
    if(rat.isTouching(W1) || rat.isTouching(W2) || rat.isTouching(W3) || 
    rat.isTouching(W4) || rat.isTouching(W5) || rat.isTouching(W6) || 
    rat.isTouching(W7) || rat.isTouching(W8) || rat.isTouching(W9) ||
    rat.isTouching(W10) || rat.isTouching(W11) || rat.isTouching(W12) ||
    rat.isTouching(W13) || rat.isTouching(W14) || rat.isTouching(W15) ||
    rat.isTouching(W16) || rat.isTouching(W17) || rat.isTouching(W18) ||
    rat.isTouching(W19) || rat.isTouching(W20) || rat.isTouching(W21) ||
    rat.isTouching(W22) || rat.isTouching(W23) || rat.isTouching(W24) ||
    rat.isTouching(W25) || rat.isTouching(W26) || rat.isTouching(W27) ||
    rat.isTouching(W28) || rat.isTouching(W29) || rat.isTouching(W30) ||
    rat.isTouching(W31) || rat.isTouching(W32) || rat.isTouching(W33) ||
    rat.isTouching(W34) || rat.isTouching(W35) || rat.isTouching(W36)){
            rat.x = width/2;
            rat.y = height/2;
            life1.destroy();
            
    }

    
    fill("red");
    textSize(40);
    text("Score : " + Score, -820+width/2, -345+height/2);

    if(rat.isTouching(fruit1)){
        Score = Score+2;
        fruit1.destroy();
    }

    if(rat.isTouching(fruit2)){
        Score = Score+2;
        fruit2.destroy();
    }
    
    if(rat.isTouching(fruit3)){
        Score = Score+2;
        fruit3.destroy();
    }

    if(rat.isTouching(fruit4)){
        Score = Score+2;
        fruit4.destroy();
    }

    if(rat.isTouching(fruit5)){
        Score = Score+2;
        fruit5.destroy();
    }

    if(rat.isTouching(fruit6)){
        Score = Score+2;
        fruit6.destroy();
    }

    if(rat.isTouching(fruit7)){
        Score = Score+2;
        fruit7.destroy();
    }
    
    if(rat.isTouching(fruit8)){
        Score = Score+2;
        fruit8.destroy();
    }

    if(rat.isTouching(fruit4)){
        Score = Score+2;
        fruit4.destroy();
    }

    if(rat.isTouching(fruit5)){
        Score = Score+2;
        fruit5.destroy();
    }

    if(Score === 10){
        W35.destroy();
    }

    rat.velocityX = 0;
    rat.velocityY = 0;

    if(keyDown(UP_ARROW)){
        rat.velocityX = 0;
        rat.velocityY = -5;
    }

    if(keyDown(DOWN_ARROW)){
        rat.velocityX = 0;
        rat.velocityY = 5;
    }
    
    if(keyDown(RIGHT_ARROW)){
        rat.velocityX = 5;
        rat.velocityY = 0;
        rat.addImage(ratImg)
    }
    
    if(keyDown(LEFT_ARROW)){
        rat.velocityX = -5;
        rat.velocityY = 0;
        rat.addImage(rat1Img);
    }

    if(rat.isTouching(cat1) || rat.isTouching(cat1)){
        cat1.velocityX = 4;
        cat2.velocityX = 4;
        rat.x = width/2;
        rat.y = height/2;
        cat1.addImage(tomImg);
    }

    

    /*else{
        cat1.velocityX = -4;
        cat2.velocityX = -4;   
    }*/


    if(rat.isTouching(cheese1)){
        Score = Score+5
        cheese1.destroy();
    }

    if(rat.isTouching(cheese2)){
        Score = Score+5
        cheese2.destroy();
        W36.destroy();
    }

    cat1.velocityX = -4
    cat2.velocityX = -4

    if(cat1.isTouching(W5)){
        cat1.x = 560+width/2
    }

    if(cat2.isTouching(W4)){
        cat2.x = -350+width/2
    }
    

        if(rat.isTouching(homeButton)){
            gameState = "home"
        }
        if(mousePressedOver(homeButton)){
            gameState = "home";
        }
    }

    

    

    drawSprites();
    //textSize(50);   
    //text(gameState,50,50);
}

