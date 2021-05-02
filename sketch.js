var h1;
var h2;
var h3;
var score=0;
var l=3;
var gameState="Start"
var b1;
var mk,man

function preload(){
    mk=loadAnimation("monkey1/1.png","monkey1/2.png","monkey1/3.png","monkey1/4.png")
    ma=loadAnimation("man/0.png","man/1.png","man/2.png","man/3.png","man/4.png","man/5.png","man/6.png","man/7.png")
    ma1=loadAnimation("man/00.jpg","man/11.jpg","man/22.jpg","man/33.jpg","man/44.jpg","man/55.jpg","man/66.jpg","man/77.jpg")
}
function setup(){
    createCanvas(1500,700);
    man=createSprite(1500/2, 650);
    man.addAnimation("man",ma1)
    h1=new Group();
    h2=new Group();
    h3=new Group();
    mo=new Group();
    b1=createButton("Start");
    b1.position(1500/2,400);
    //b1.hide()
}

function draw(){
    if(gameState === "Start"){
        background(0);
        fill("white");
        textSize(20);
        text("Hats n Monkeys", 1500/2, 100);
        text("Aim- Catch the hats before the monkey does", 1400/2, 200);
        text("Make sure to save your life from the monkeys", 1400/2,300);
     
    }
    b1.mousePressed(playing)
    function playing(){
        gameState="Play"
        b1.hide();
   
    }
    if(gameState==="Play"){
        background(0);
        drawSprites();
        b1.hide();
    

edges=createEdgeSprites();
man.bounceOff(edges);
if (keyDown(LEFT_ARROW)){
    man.x+=-20;
 // man.setAnimation("man",ma1)

}
if (keyDown(RIGHT_ARROW)){
  // man.setAnimation("man",ma)
    man.x+=20;
    }
    hat1();
    hat2();
    hat3();
    if (h1.isTouching(man)){
        h1.destroyEach();
        score=score+1;
    }
    if (h2.isTouching(man)){
        h2.destroyEach();
        score=score+2;
    }
    if (h3.isTouching(man)){
        h3.destroyEach();
        score=score+3;
    }
    if (score>=2){
        monk();
    }
    if (mo.isTouching(h1)){
        h1.destroyEach();
        l=l-1;
    }
    if (mo.isTouching(h2)){
        h2.destroyEach();
        l=l-1;
    }
    if (mo.isTouching(h3)){
        h3.destroyEach();
        l=l-1;
    }
    textSize(30);
    text("Lives👉"+l,50,30);
    text("Score👉"+score,1300,30);

    }

}

function hat1(){
if (frameCount%100===0){
    h01=createSprite(Math.round(random(50,1250)),0);
    h01.velocityY=10;
    h01.lifetime=700;
    h1.add(h01);
}
}
function hat2(){
    if (frameCount%150===0){
        h02=createSprite(Math.round(random(30,1000)),0);
        h02.shapeColor="blue";
        h02.velocityY=13;
        h02.lifetime=700;
        h2.add(h02);
    }
}
function hat3(){
    if (frameCount%200===0){
        h03=createSprite(Math.round(random(20,1055)),0);
        h03.shapeColor="red";
        h03.velocityY=16;
        h03.lifetime=700;
        h3.add(h03);
    }
}
function monk(){
    if (frameCount%400===0){
        m=createSprite(0,650);
m.addAnimation("lab",mk)
        m.shapeColor="brown";
        m.velocityX=5;
        m.lifetime=1550;
        mo.add(m);
    }
}