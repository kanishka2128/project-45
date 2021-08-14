var backgroundImg, scientistImg, scientist, invisibleGround
var bowImg, bow, invisibleGroundBow
var arrow, arrowImg

function preload() {
backgroundImg = loadImage("image back.jpeg")
scientistImg = loadImage("scientist.jpeg")
arrowImg = loadImage("arrow0.png")
bowImg = loadImage("bow0.png")
}

function setup() {
createCanvas(windowWidth, windowHeight); 

scientist = createSprite(500,700,50,50);
scientist.addImage("scientist", scientistImg);
scientist.scale = 0.2

invisibleGround = createSprite(windowWidth/2, windowHeight, windowWidth,10 );
invisibleGround.visible = false

invisibleGroundBow = createSprite(windowWidth/2, windowHeight- 150, windowWidth,10 );
invisibleGroundBow.visible = false

bow = createSprite(100,200,50,50)
bow.addImage(bowImg)
bow.x = scientist.x 
bow.y = scientist.y - 150

console.log(windowWidth + " " + windowHeight)


 arrowG = new Group()
} 

function draw() {
background("red")

image(backgroundImg, 0,0, windowWidth,windowHeight)

if (keyDown(RIGHT_ARROW)) {
    scientist.x = scientist.x + 10
    bow.x = bow.x + 10
    arrow.velocityX = -15
}

if (keyDown(LEFT_ARROW)) {
    scientist.x = scientist.x - 10
    bow.x = bow.x -10
    arrow.velocityX = -15
}

if (keyDown("space") && scientist.y > 650) {
    scientist.velocityY = -15;
    bow.velocityY = -15
   
} 

if (keyDown("s")) {
    arrow = createSprite(50,50,20,20)
    arrow.x = bow.x
    arrow.y = bow.y
    arrow.addImage(arrowImg)
    arrow.velocityY = -100
    arrowG.add(arrow)
    arrow.scale = 0.2
}

if (keyDown)
scientist.velocityY += 0.5
bow.velocityY +=0.5

scientist.collide(invisibleGround)
bow.collide(invisibleGroundBow)



drawSprites()
}