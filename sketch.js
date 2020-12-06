const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var score = 0;


function setup() {
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(50, 100, 20);

    slingshot = new SlingShot(polygon.body, { x: 75, y: 200 });

    ground = new Ground(400, 380, 800, 20);

    stand1 = new Ground(400, 310, 300, 10);
    stand2 = new Ground(700, 200, 300, 10);


    //level oneone
    block1 = new Box(300, 275, 30, 40);
    block2 = new Box(330, 275, 30, 40);
    block3 = new Box(360, 275, 30, 40);
    block4 = new Box(390, 275, 30, 40);
    block5 = new Box(420, 275, 30, 40);
    block6 = new Box(450, 275, 30, 40);
    block7 = new Box(480, 275, 30, 40);

    //level twoone
    block8 = new Box(330, 235, 30, 40);
    block9 = new Box(360, 235, 30, 40);
    block10 = new Box(390, 235, 30, 40);
    block11 = new Box(420, 235, 30, 40);
    block12 = new Box(450, 235, 30, 40);

    //level threeone
    block13 = new Box(360, 195, 30, 40);
    block14 = new Box(390, 195, 30, 40);
    block15 = new Box(420, 195, 30, 40);

    //topone
    block16 = new Box(390, 155, 30, 40);

    //level onesecond
    block17 = new Box(630, 135, 30, 40);
    block18 = new Box(660, 135, 30, 40);
    block19 = new Box(690, 135, 30, 40);
    block20 = new Box(720, 135, 30, 40);
    block21 = new Box(750, 135, 30, 40);

    //level twosecond
    block22 = new Box(660, 95, 30, 40);
    block23 = new Box(690, 95, 30, 40);
    block24 = new Box(720, 95, 30, 40);

    //topsecond
    block25 = new Box(690, 55, 30, 40);

}

function draw() {
    Engine.update(engine);
    background(0);

    textSize(12);
    fill("white");
    text("Drag and release the stone in order to hit the blocks!", 100, 20);

    fill("green");
    stroke("black");
    strokeWeight(4);
    text("Score " + score, 90, 90);


    stand1.display();
    stand2.display();

    fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("blue");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("yellow");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();
    fill("orange");
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("purple");
    block22.display();
    block23.display();
    block24.display();
    fill("white");
    block25.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();

    ground.display();
    slingshot.display();
    polygon.display();

    drawSprites();

}

function keyPressed() {
    if (keyCode === 32) {
        slingshot.attach(polygon.body);
    }
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    slingshot.fly();
}