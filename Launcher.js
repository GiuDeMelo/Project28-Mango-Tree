class Laucher{
  constructor(bodyP,x,y){
    var options = {
      bodyP: bodyP,
      point: point,
      stiffness: 0.08,
      length: 4
    }
    this.point = point;
    this.launcher = Constraint.create(options);
    World.add(world,this.sling);
  }

  attach(body){
    this.launcher.bodyP = body;
  }

  fly(){
    this.launcher.bodyP = null;
  } 

  display(){
    if(this.launcher.bodyP){
      var pointA = this.launcher.bodyP.position;
      var pointB = this.point;

      if(pointA.x < 200){
        line(pointA.x-20,pointA.y, pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y, pointB.x+20,pointB.y);
       }

       else{
        line(pointA.x-20,pointA.y, pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y, pointB.x+20,pointB.y);
      }
    }
 }

}