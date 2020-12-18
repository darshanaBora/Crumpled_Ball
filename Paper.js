class Paper {
  constructor(x, y) {
    var options = {
      'isStatic': false,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
    }
    this.body = Bodies.circle(x,y,20,options);
    
    World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(219,92,215);
    circle(0,0,50);
    pop();
  }
}