class Polygon{

    constructor(x,y)
    {
        var options = {
            'isStatic' :false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.width=50;
        this.height=50;
        this.body=Bodies.rectangle(x,y,70,50,options);

        this.image = loadImage("polygon.png");

        World.add(world,this.body);
    
    }
    display()
    {
        var pos=this.body.position;
        //pos.x=mouseX;
        //pos.y=mouseY;
        fill("red");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,this.width,this.height);
    }
}