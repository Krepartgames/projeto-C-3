var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22;
var gustavo;
var edges;
var cup;

function preload(){

}

function setup(){
    canvas = createCanvas(400,400);

    gustavo = createSprite(20,25,18,18)
    gustavo.shapeColor = "orange";

    edges = createEdgeSprites();

    cup = createSprite(350,380,30,30)

    p1 = createSprite(10,90,13,60)
    p1.shapeColor = "green"
     p2 = createSprite(300,180,60,13)
    p2.shapeColor = "green"
     p3 = createSprite(270,160,13,60)
    p3.shapeColor = "green"
     p4 = createSprite(100,300,60,13)
    p4.shapeColor = "green"
     p5 = createSprite(100,30,13,60)
    p5.shapeColor = "green"
    p6 = createSprite(45,180,60,13)
    p6.shapeColor = "green"
    p7 = createSprite(365,342,60,13)
    p7.shapeColor = "green"
    p8 = createSprite(274,272,13,60)
    p8.shapeColor = "green"
    p9 = createSprite(160,174,60,13)
    p9.shapeColor = "green"
    p10 = createSprite(373,295,60,13)
    p10.shapeColor = "green"
    p11 = createSprite(183,396,13,60)
    p11.shapeColor = "green"
    p12 = createSprite(285,585,60,13)
    p12.shapeColor = "green"
    p13 = createSprite(373,133,60,13)
    p13.shapeColor = "green"
    p14 = createSprite(183,396,13,60)
    p14.shapeColor = "green"
    p15 = createSprite(174,123,60,13)
    p15.shapeColor = "green"
    p16 = createSprite(395,382,13,60)
    p16.shapeColor = "green"
    p17 = createSprite(148,214,13,60)
    p17.shapeColor = "green"
    p18 = createSprite(185,166,60,13)
    p18.shapeColor = "green"
    p19 = createSprite(312,286,13,60)
    p19.shapeColor = "green"
    p20 = createSprite(173,124,60,13)
    p20.shapeColor = "green"
    p21 = createSprite(157,109,60,13)
    p21.shapeColor = "green"
    p22 = createSprite(395,167,13,60)
    p22.shapeColor = "green"
}

function draw(){
    background(220);

    if(keyDown("UP_ARROW")){
        gustavo.velocityX = 0;
        gustavo.velocityY = -4;
    }
    if(keyDown("DOWN_ARROW")){
        gustavo.velocityX = 0;
        gustavo.velocityY = 4;
    }
    if(keyDown("LEFT_ARROW")){
        gustavo.velocityX = -4;
        gustavo.velocityY = 0;
    }
    if(keyDown("RIGHT_ARROW")){
        gustavo.velocityX = 4;
        gustavo.velocityY = 0;
    }

    gustavo.bounceOff(edges)
    gustavo.bounceOff(p1)
    gustavo.bounceOff(p2)
    gustavo.bounceOff(p3)
    gustavo.bounceOff(p4)
    gustavo.bounceOff(p5)
    gustavo.bounceOff(p6)
    gustavo.bounceOff(p7)
    gustavo.bounceOff(p8)
    gustavo.bounceOff(p9)
    gustavo.bounceOff(p10)
    gustavo.bounceOff(p11)
    gustavo.bounceOff(p12)
    gustavo.bounceOff(p13)
    gustavo.bounceOff(p14)
    gustavo.bounceOff(p15)
    gustavo.bounceOff(p16)
    gustavo.bounceOff(p17)
    gustavo.bounceOff(p18)
    gustavo.bounceOff(p19)
    gustavo.bounceOff(p20)
    gustavo.bounceOff(p21)
    gustavo.bounceOff(p22)

    if(gustavo.collide(cup)){
        background("white")
    }

    drawSprites()
}
