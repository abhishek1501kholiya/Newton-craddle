class Bob{
    constructor(x,y,r){
        var options = {
            'isStatic' : false,
           'restitution':1,
           ' friction':0,
            'density':0.8
        }
       
        this.body = Bodies.circle(x,y,r/2,options);
        this.r = r;
       // this.image = loadImage("sprites/paper.png");
        World.add(world,this.body);
        //this.x = x;
        //this.y = y;
     

    }
    show(){
        const pos = this.body.position;
        const angle = this.body.angle;
        // image(img,this.x,this.y);
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        //imageMode(CENTER);
      //  image(this.image, -0, -5, 30, 30);
        fill("purple");
       ellipseMode(CENTER);
      ellipse(0,0,this.r,this.r);
        pop();
    }
    
}
  //  class Ball{
    //constructor(x,y,radius){
        //this.body = Bodies.rectangle(x,y,radius,options);
        //this.x = x;
        //this.y = y;
        //this.radius = radius;
       //this.width = width;
      // this.height = height;
    //    World.add(world,this.body);
     
     
        
        
    
    //}
       // show(){
         //   var pos = this.body.position;
           // var angle = this.body.angle;
           // push()
            //translate(pos.x, pos.y);
            //rotate(angle);
        //  rectMode(CENTER);
        //ellipseMode(CENTER);
          //fill("white");
         //ellipse(pos.x,pos.y,this.radius,this.radius);
          // rect(pos.x,pos.y,this.width,this.height); 
           //pop()
        //}
    //}
    

