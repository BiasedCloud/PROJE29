class Base{
    constructor(x,y,w,h){
        this.w = w;
        this.h = h;

        var ops = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,ops);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();       
        rectMode(CENTER);
        fill("Brown");
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}