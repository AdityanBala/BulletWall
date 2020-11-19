var Bullet;
var Wall;
var Speed, Weight,Thickness;
var Damage = 0;

function setup() {
  createCanvas(1600,400);

  Speed = random(223,321);
  Weight = random(30,52);
  Thickness = random(22,83)

  Bullet = createSprite(0, 200, 20, 7);
  Bullet.shapeColor = "white";

  Wall = createSprite(1200,200,Thickness,height/2);
  Wall.shapeColor = color(80,80,80);

  Bullet.velocityX = Speed;
}

function draw() {
  background("grey");

  if(Bullet.collide(Wall)){
    Bullet.velocityX = 0;
    
    Damage = (((0.5)*(Weight)*(Speed)*(Speed))/
              (Thickness*Thickness*Thickness));
    
    console.log(Damage);
  }

  if(Damage <= 10 && Damage != 0){
    Wall.shapeColor = color(0,255,0);
    fill("white");
    text("The Damage Is: " + Damage,300,300);
  }else if(Damage > 10 && Damage != 0){
    Wall.shapeColor = color(255, 0, 0);
    fill("white");
    text("The Damage Is: " + Damage,300,300);
  }

  //console.log(Speed);
  console.log(Weight);

  drawSprites();
}