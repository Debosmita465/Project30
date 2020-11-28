class Block extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.Visibility = 255;
  }
display(){
  if(this.body.speed<4){
  fill(255);
  strokeWeight(2);
  stroke('rgb(0,0,0)')
  super.display();
  }
  else{
    World.remove(world,this.body);
    push();
    tint(255,this.Visibility);
    pop();
  }
}
}
