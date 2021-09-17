var box;
function setup() {
  box = createSprite(299,299,24,24)
  createCanvas(600,600);
}

function draw() 
{
  background("green");
 
 if (keyIsDown(UP_ARROW)){
   box.position.y = box.position.y - 4
 }

 if (keyIsDown(DOWN_ARROW)){
  box.position.y = box.position.y + 4
}
drawSprites()
}




