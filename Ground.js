class Ground {
 constructor(x,y,width,height){
     var options = {
         isStatic:true,
         'restitution':0.2,
         'friction':0.2,
         'density':0.3,
     }
     this.body = Bodies.rectangle(x,y,width,height,options);

     this.width = width;
     this.height = height;

     World.add(world, this.body);
 }
 display() {
     var position = this.body.position;

     fill("grey");
     rect(this.body.position.x,this.body.position.y,this.width,this.height);
 }

}